import { fireEvent } from "@testing-library/react-native";
import ModalCreatePlayer from "..";
import { customRender } from "@/utils/customRender";
import { getPlayers } from "@/storage/playersStorage";


describe('ModalCreatePlayer', () => {
    it('should render', () => {
        const { UNSAFE_root } = customRender(
            <ModalCreatePlayer
                visible
                onRequestClose={jest.fn}
                onSucessPlayerCreated={jest.fn}
            />)

        expect(UNSAFE_root.children.length).toBeGreaterThan(0)
    })
    it('should DID NOT create player when player name wasnt provided', () => {
        const { getByText } = customRender(<ModalCreatePlayer
            visible
            onRequestClose={jest.fn}
            onSucessPlayerCreated={jest.fn}
        />)

        const createButton = getByText('Criar')

        fireEvent.press(createButton)

        const playersInStorage = getPlayers()

        expect(playersInStorage).toBeNull()
    })
    describe('player name was provided', () => {
        it('should create player in storage', () => {

            const { getByText, getByPlaceholderText } = customRender(<ModalCreatePlayer
                visible
                onRequestClose={jest.fn}
                onSucessPlayerCreated={jest.fn}
            />)

            const input = getByPlaceholderText('Nome do novo jogador')
            const createButton = getByText('Criar')

            fireEvent.changeText(input, 'Player Teste')
            fireEvent.press(createButton)

            const playersInStorage = getPlayers()
            const playerIsInStorage = playersInStorage!.findIndex(p => p.playerName === 'Player Teste') > -1

            expect(playerIsInStorage).toBeTruthy()
        })
        it('should called onSucessPlayerCreated when player created', () => {
            const onSucessPlayerCreated = jest.fn()

            const { getByText, getByPlaceholderText } = customRender(<ModalCreatePlayer
                visible
                onRequestClose={jest.fn}
                onSucessPlayerCreated={onSucessPlayerCreated}
            />)

            const input = getByPlaceholderText('Nome do novo jogador')
            const createButton = getByText('Criar')

            fireEvent.changeText(input, 'Player Teste')
            fireEvent.press(createButton)


            expect(onSucessPlayerCreated).toBeCalled()
        })
        it('should called onRequestClose when player created', () => {
            const onRequestClose = jest.fn()

            const { getByText, getByPlaceholderText } = customRender(<ModalCreatePlayer
                visible
                onRequestClose={onRequestClose}
                onSucessPlayerCreated={jest.fn}
            />)

            const input = getByPlaceholderText('Nome do novo jogador')
            const createButton = getByText('Criar')

            fireEvent.changeText(input, 'Player Teste')
            fireEvent.press(createButton)

            expect(onRequestClose).toBeCalled()
        })
    })
})

