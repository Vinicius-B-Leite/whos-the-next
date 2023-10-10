import { customRender } from "@/utils/customRender"
import Home from ".."
import { addNewPlayerOnQueue, playersQueueReducer } from "@/feature/playersOnQueue"
import { mock } from "./mocks"
import { act, fireEvent } from "@testing-library/react-native"
import { fireGestureHandler, getByGestureTestId } from "react-native-gesture-handler/jest-utils"
import { PanGesture, State, TapGesture } from "react-native-gesture-handler"
import { store } from "@/feature/store"

const mockNavigate = jest.fn()
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        navigate: mockNavigate
    })
}))

describe('Home', () => {

    it('should render correctly', () => {
        const { UNSAFE_root } = customRender(<Home />)

        expect(UNSAFE_root.children.length).toBeGreaterThan(0)
    })
    it('should select next player of the queue to init game', () => {


        const { queryByText } = customRender(
            <Home />,
            {
                preloadedState: {
                    nextPlayerQueue: mock.playerMock
                }
            }
        )

        const nextPlayerQueue = getByGestureTestId('tap')

        act(() => {
            fireGestureHandler<TapGesture>(nextPlayerQueue, [
                { state: State.BEGAN },
                { state: State.ACTIVE },
                { state: State.END },
            ])
        })
        const player1 = queryByText('Player 1')

        expect(player1).toBeNull()

    })
    it('should increment points in the player', () => {
        const { getAllByTestId, getByText } = customRender(
            <Home />,
            {
                preloadedState: {
                    playersPlayings: {
                        player1: { ...mock.playerMock[0], points: 0 },
                        player2: { ...mock.playerMock[1], points: 5 },
                    }
                }
            }
        )

        const incrementIconPlayer1 = getAllByTestId('plusIconIncrement')[0]
        const pointsPlayer1 = getByText('0 - 5')

        fireEvent.press(incrementIconPlayer1)

        expect(pointsPlayer1.children[0]).toBe('1')

    })
    it('should decrement points in the player', () => {
        const { getAllByTestId, getByText } = customRender(
            <Home />,
            {
                preloadedState: {
                    playersPlayings: {
                        player1: { ...mock.playerMock[0], points: 4 },
                        player2: { ...mock.playerMock[1], points: 5 },
                    }
                }
            }
        )

        const minusIconDecrementPlayer1 = getAllByTestId('minusIconDecrement')[0]
        const pointsPlayer1 = getByText('4 - 5')

        fireEvent.press(minusIconDecrementPlayer1)

        expect(pointsPlayer1.children[0]).toBe('3')

    })
    it('should select next player when current player loses', () => {
        const { queryByText } = customRender(
            <Home />,
            {
                preloadedState: {
                    nextPlayerQueue: [mock.playerMock[2]],
                    playersPlayings: {
                        player1: { ...mock.playerMock[0], points: 3 },
                        player2: { ...mock.playerMock[1], points: 5 },
                    }
                },
            }
        )

        const nextPlayerQueue = getByGestureTestId('tap')

        act(() => {
            fireGestureHandler<TapGesture>(nextPlayerQueue, [
                { state: State.BEGAN },
                { state: State.ACTIVE },
                { state: State.END },
            ])
        })

        const nextPlayerIsPlaying = queryByText(mock.playerMock[2].playerName)

        expect(nextPlayerIsPlaying).toBeTruthy()

    })
    it('should delete plauer on queue when click on trash swipeble button', async () => {
        const { getByTestId, findByTestId, queryByText } = customRender(
            <Home />,
            {
                preloadedState: {
                    nextPlayerQueue: [mock.playerMock[0]]
                }
            }
        )

        const button = getByTestId('swipeable')

        fireGestureHandler<PanGesture>(button, [
            { state: State.BEGAN, translationX: 0 },
            { state: State.ACTIVE, translationX: 50 },
            { translationX: 60 },
            { translationX: 60 },
            { state: State.END, translationX: 60 },
        ])

        const trashIcon = await findByTestId('trashIcon')
        fireEvent.press(trashIcon)

        const playerQueue = queryByText(mock.playerMock[0].playerName)

        expect(playerQueue).toBeNull()
    })
    it('should navigate to AddPlayer screen when buttonSecondary is clicked', () => {
        const { getByText } = customRender(
            <Home />
        )

        const buttonSecondary = getByText('Adicionar jogador')

        fireEvent.press(buttonSecondary)

        expect(mockNavigate).toBeCalledWith('HomeStack', { screen: 'AddPlayer' })
    })
})