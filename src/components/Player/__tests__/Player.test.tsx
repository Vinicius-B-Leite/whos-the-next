import { customRender } from "@/utils/customRender";
import Player from "..";
import { mock } from "./mocks";
import { fireGestureHandler, getByGestureTestId } from 'react-native-gesture-handler/jest-utils'
import { act, fireEvent } from "@testing-library/react-native";
import { PanGesture, State, TapGesture } from "react-native-gesture-handler";
import { Alert } from "react-native";


describe('Player', () => {
    it('should render', () => {
        const { UNSAFE_root } = customRender(
            <Player
                {...mock.playerMock}
                deletePlayer={jest.fn}
                onSelectPlayer={jest.fn} />
        )

        expect(UNSAFE_root.children.length).toBeGreaterThan(0)
    })
    it('should called onSelectPlayer when double tap', () => {
        const onSelectPlayer = jest.fn()

        const { } = customRender(
            <Player
                {...mock.playerMock}
                deletePlayer={jest.fn}
                onSelectPlayer={onSelectPlayer} />
        )

        const button = getByGestureTestId('tap')
        fireGestureHandler<TapGesture>(button, [
            { state: State.BEGAN },
            { state: State.ACTIVE },
            { state: State.END },
        ])

        expect(onSelectPlayer).toBeCalled()
    })
    it('should called deletePlayer when double tap', async () => {
        const deletePlayer = jest.fn()

        const { getByTestId, findByTestId } = customRender(
            <Player
                {...mock.playerMock}
                deletePlayer={deletePlayer}
                onSelectPlayer={jest.fn} />
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

        await act(() => {
            expect(deletePlayer).toBeCalled()
        })
    })
    it('should NOT render the uri if avatarUrl was empty', () => {
        const { getByTestId } = customRender(
            <Player
                {...mock.playerMock}
                deletePlayer={jest.fn}
                onSelectPlayer={jest.fn} />
        )
        const avatar = getByTestId('avatar')

        expect(avatar.props.source).not.toHaveProperty('uri')
    })
})