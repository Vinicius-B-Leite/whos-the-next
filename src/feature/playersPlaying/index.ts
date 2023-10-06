import { PlayerType } from '@/types/Player'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type initialState = PlayerType & { points: number }

const initialState: initialState[] = [
    {
        id: '1',
        losses: 0,
        playerName: 'Cbum0',
        wins: 0,
        points: 1
    },
    {
        id: '2',
        losses: 0,
        playerName: 'Cbum2',
        wins: 0,
        points: 4
    }
]

export const playersPlayingSlice = createSlice({
    name: 'playersPlaying',
    initialState,
    reducers: {
        selectNextPlayer: (state, action: PayloadAction<{ nextPlayer: PlayerType }>) => {
            //substituir o proximo da lista pelo jogador perdedor
            const indexOfPlayerLosing = state[0].points > state[1].points ? 1 : 0
            state[indexOfPlayerLosing] = { ...action.payload.nextPlayer, points: 0 }

            //zerar os pontos do ganhador
            state[indexOfPlayerLosing === 0 ? 1 : 0].points = 0


        }
    },
})

export const { selectNextPlayer } = playersPlayingSlice.actions

export const playersPlayingReducer = playersPlayingSlice.reducer