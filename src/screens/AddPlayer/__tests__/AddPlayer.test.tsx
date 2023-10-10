import { customRender } from "@/utils/customRender";
import AddPlayer from "..";
import { mock } from "./mocks";
import { fireEvent } from "@testing-library/react-native";
import { store } from "@/feature/store";
import { fireGestureHandler, getByGestureTestId } from 'react-native-gesture-handler/jest-utils'
import { PanGesture, State, TapGesture } from "react-native-gesture-handler";

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        goBack: mockedGoBack,
        getParent: () => ({
            setOptions: jest.fn
        }),
        addListener: jest.fn,
    })
}));


jest.mock('@/storage/playersStorage', () => ({
    ...jest.requireActual('@/storage/playersStorage'),
    getPlayerStorage: () => mock.playerMock,
    deletePlayerStorage: () => [mock.playerMock[1]]
}))


describe('Add Player', () => {

    it('should render correctly with player list', () => {
        const { getByText } = customRender(<AddPlayer />)

        const player = getByText('Test')
        expect(player).toBeTruthy()
    })
    it('should select player with double tap and go back home', () => {
        const { } = customRender(<AddPlayer />)

        const player = getByGestureTestId('tap')
        fireGestureHandler<TapGesture>(player, [
            { state: State.BEGAN },
            { state: State.ACTIVE },
            { state: State.END },
        ])

        expect(mockedGoBack).toBeCalled()
    })
    it('should filter players by player name', () => {
        const { getByPlaceholderText, getByText } = customRender(<AddPlayer />)


        const textInput = getByPlaceholderText('Pesquise o jogador')
        fireEvent.changeText(textInput, 'Test 2')

        expect(getByText('Test 2')).toBeTruthy()

    })
    it('should deelete players when swipe is clicked', async () => {
        const { getAllByTestId, findAllByTestId, queryByText } = customRender(<AddPlayer />)

        const button = getAllByTestId('swipeable')

        fireGestureHandler<PanGesture>(button[0], [
            { state: State.BEGAN, translationX: 0 },
            { state: State.ACTIVE, translationX: 50 },
            { translationX: 60 },
            { translationX: 60 },
            { state: State.END, translationX: 60 },
        ])

        const trashIcon = await findAllByTestId('trashIcon')
        fireEvent.press(trashIcon[0])

        expect(queryByText('Test')).toBeNull()
    })
    it('should open ModalCreatePlayer when plus icon is clicked', async () => {
        const { findByTestId, getByText } = customRender(<AddPlayer />)

        const plusIcon = await findByTestId('plusIcon')
        fireEvent.press(plusIcon)

        const buttonModal = getByText('Criar')

        expect(buttonModal).toBeTruthy()
    })
    it('should NOT create player when player name is provided', async () => {
        const { findByTestId, getByText, queryByText } = customRender(<AddPlayer />)

        const plusIcon = await findByTestId('plusIcon')
        fireEvent.press(plusIcon)

        const buttonModal = getByText('Criar')

        fireEvent.press(buttonModal)


        expect(queryByText('Player test')).toBeNull()
    })
    it('should create player when player name is provided', async () => {
        const { findByTestId, getByText, getByPlaceholderText } = customRender(<AddPlayer />)

        const plusIcon = await findByTestId('plusIcon')
        fireEvent.press(plusIcon)

        const playerNameInput = getByPlaceholderText('Nome do novo jogador')
        const buttonModal = getByText('Criar')

        fireEvent.changeText(playerNameInput, 'Player test')
        fireEvent.press(buttonModal)


        expect(getByText('Player test')).toBeTruthy()
    })
    it('should NOT add player when theses player is playing', () => {
        mockedGoBack.mockClear()

        const { getByText } = customRender(
            <AddPlayer />,
            {
                preloadedState: {
                    playersPlayings: {
                        player1: { ...mock.playerMock[1], points: 1 },
                        player2: { ...mock.playerMock[0], points: 1 }
                    }
                }
            }
        )

        const playerAlreadyPlaying = getByText(mock.playerMock[1].playerName)

        fireEvent.press(playerAlreadyPlaying)

        expect(mockedGoBack).not.toHaveBeenCalled()
    })
})