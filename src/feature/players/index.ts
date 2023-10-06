import { PlayerType } from '@/types/Player'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: PlayerType[] = [
    {
        id: '1',
        losses: 0,
        playerName: 'Cbum',
        wins: 0,
    }
]

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {

    },
})

export const { } = playersSlice.actions

export const playerReducer = playersSlice.reducer