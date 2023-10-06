import { PlayerType } from '@/types/Player'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: PlayerType[] = [
    {
        id: '1',
        losses: 0,
        playerName: 'Cbum',
        wins: 0,
    },
    {
        id: '2',
        losses: 0,
        playerName: 'Cbum99',
        wins: 0,
    },
]

export const playersQueueSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        removeNextPlayer: (state) => {
            state.splice(0, 1)
        },
        addNewPlayerOnQueue: (state, actions: PayloadAction<PlayerType>) => {
            state.push(actions.payload)
        }
    },
})

export const { removeNextPlayer, addNewPlayerOnQueue } = playersQueueSlice.actions

export const playersQueueReducer = playersQueueSlice.reducer