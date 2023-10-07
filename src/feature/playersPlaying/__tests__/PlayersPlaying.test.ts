import { decrementPontuation, incrementPontuation, initGame, playersPlayingReducer, selectNextPlayer } from ".."
import { mock } from "./mocks"

describe('Players Playing Reducer', () => {
    describe('initGame', () => {
        it('should add player provided to player 1 when state is empt', () => {
            const state = playersPlayingReducer(undefined, initGame(mock.playerMock[0]))

            expect(state.player1.id).toEqual(mock.playerMock[0].id)
        })

        it('should add player provided to player 2 when player 1 is full', () => {
            const state = playersPlayingReducer(undefined, initGame(mock.playerMock[0]))
            const state2 = playersPlayingReducer(state, initGame(mock.playerMock[1]))

            expect(state2.player2.id).toEqual(mock.playerMock[1].id)
        })
    })
    describe('selectNextPlayer', () => {
        it('should select next player on player 1 if player 2 is winnig', () => {
            const initialState = {
                player1: {
                    ...mock.playerMock[0],
                    points: 0
                },
                player2: {
                    ...mock.playerMock[1],
                    points: 4
                }
            }
            const newState = playersPlayingReducer(initialState, selectNextPlayer({ nextPlayer: mock.playerMock[2] }))

            expect(newState.player1.id).toEqual(mock.playerMock[2].id)
        })

        it('should select next player on player 2 if player 1 is winnig', () => {
            const initialState = {
                player1: {
                    ...mock.playerMock[0],
                    points: 10
                },
                player2: {
                    ...mock.playerMock[1],
                    points: 4
                }
            }
            const newState = playersPlayingReducer(initialState, selectNextPlayer({ nextPlayer: mock.playerMock[2] }))

            expect(newState.player2.id).toEqual(mock.playerMock[2].id)
        })
    })

    describe('incrementPontuation', () => {
        it('should not increment when player is the initial state', () => {
            const state = playersPlayingReducer(undefined, incrementPontuation({
                id: '1',
                losses: 0,
                playerName: 'Player 1',
                wins: 0,
            }))

            expect(state.player1.points).toEqual(0)
        })
        it('should increment points in player provided', () => {

            const state = {
                player1: { ...mock.playerMock[0], points: 0 },
                player2: { ...mock.playerMock[1], points: 0 }
            }
            const newState = playersPlayingReducer(state, incrementPontuation(mock.playerMock[1]))

            expect(newState.player2.points).toEqual(1)
        })
        it('should decrementPontuation points in player provided', () => {

            const state = {
                player1: { ...mock.playerMock[0], points: 0 },
                player2: { ...mock.playerMock[1], points: 1 }
            }
            const newState = playersPlayingReducer(state, decrementPontuation(mock.playerMock[1]))

            expect(newState.player2.points).toEqual(0)
        })
    })
})
