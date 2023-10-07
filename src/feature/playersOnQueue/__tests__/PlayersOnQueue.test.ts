import { addNewPlayerOnQueue, playersQueueReducer, removePlayerOnQueue } from ".."
import { mock } from "./mocks"
import { store } from '../../store'
import { mocks } from "@/storage/__tests__/mocks"

jest.mock('../../store')

store.getState = () => ({
    playersPlayings: {
        player1: { ...mock.playerMock[0], points: 0 },
        player2: { ...mock.playerMock[1], points: 0 },
    },
    nextPlayerQueue: []
})
describe('Player On Queue Reducer', () => {
    describe('addNewPlayerOnQueue', () => {

        it('should not add the player when the player is already playing', () => {
            const stateUpdated = playersQueueReducer([], addNewPlayerOnQueue(mock.playerMock[1]))
            expect(stateUpdated.length).toEqual(0)
        })
        it('should NOT add the same player two times', () => {
            const stateUpdated = playersQueueReducer([], addNewPlayerOnQueue(mock.playerMock[2]))
            const stateUpdated2 = playersQueueReducer(stateUpdated, addNewPlayerOnQueue(mock.playerMock[2]))

            expect(stateUpdated2.length).toBe(1)
        })

        it('should add the player provided to the queue', () => {
            const stateUpdated = playersQueueReducer([], addNewPlayerOnQueue(mock.playerMock[2]))

            expect(stateUpdated.includes(mock.playerMock[2])).toBeTruthy()
        })

    })

    describe('removePlayerOnQueue', () => {
        it('should remove the player provided from the queue', () => {
            const state = playersQueueReducer([mocks.mockPlayers[2]], removePlayerOnQueue({ index: 0 }))
            expect(state.length).toBe(0)
        })
        it('should did nothing when index provided is greater than length queue', () => {
            const state = playersQueueReducer([mocks.mockPlayers[2]], removePlayerOnQueue({ index: 1 }))
            expect(state.length).toBe(1)
        })
    })

})