import { addNewPlayerOnQueue, playersQueueReducer, removePlayerOnQueue } from ".."
import { mock } from "./mocks"
import { mocks } from "@/storage/__tests__/mocks"

describe('Player On Queue Reducer', () => {
    describe('addNewPlayerOnQueue', () => {
        it('should NOT add the same player two times', () => {
            const stateUpdated = playersQueueReducer([mock.playerMock[2]], addNewPlayerOnQueue(mock.playerMock[2]))

            expect(stateUpdated.length).toBe(1)
        })

        it('should add the player provided to the queue', () => {
            const stateUpdated = playersQueueReducer([], addNewPlayerOnQueue(mock.playerMock[1]))

            expect(stateUpdated.includes(mock.playerMock[1])).toBeTruthy()
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