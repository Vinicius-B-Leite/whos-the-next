import { PlayerType } from '@/types/Player'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from '../store'


type initialState = {
    player1: PlayerType & { points: number },
    player2: PlayerType & { points: number }
}

const initialState: initialState = {
    player1: {
        id: '1',
        losses: 0,
        playerName: 'Cbum0',
        wins: 0,
        points: 1
    },
    player2: {
        id: '2',
        losses: 0,
        playerName: 'Cbum2',
        wins: 0,
        points: 4
    }
}

export const playersPlayingSlice = createSlice({
    name: 'playersPlaying',
    initialState,
    reducers: {
        selectNextPlayer: (state, action: PayloadAction<{ nextPlayer: PlayerType }>) => {
            const isPlayer1Winner = state.player1.points > state.player2.points

            if (isPlayer1Winner) {
                state.player2 = { ...action.payload.nextPlayer, points: 0 }
                state.player1.points = 0
            }
            else {
                state.player1 = { ...action.payload.nextPlayer, points: 0 }
                state.player2.points = 0
            }
        },
        incrementPontuation: (state, action: PayloadAction<PlayerType>) => {
            const isPlayer1 = action.payload.id === state.player1.id

            if (isPlayer1) {
                state.player1.points += 1
                return
            }

            state.player2.points += 1
        },
        decrementPontuation: (state, action: PayloadAction<PlayerType>) => {
            const isPlayer1 = action.payload.id === state.player1.id

            if (isPlayer1) {
                state.player1.points -= 1
                return
            }

            state.player2.points -= 1
        }
    },
})

export const { selectNextPlayer, incrementPontuation, decrementPontuation } = playersPlayingSlice.actions

export const playersPlayingReducer = playersPlayingSlice.reducer