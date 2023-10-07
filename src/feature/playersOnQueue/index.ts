import { PlayerType } from '@/types/Player'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: PlayerType[] = []

export const playersQueueSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        removePlayerOnQueue: (state, actions: PayloadAction<{ index: number }>) => {
            const indexExistsInQueue = (state.length - 1) >= actions.payload.index
            if (!indexExistsInQueue) return

            state.splice(actions.payload.index, 1)
        },
        addNewPlayerOnQueue: (state, actions: PayloadAction<PlayerType>) => {

            const playerAlreadyOnQueue = state.find(p => p.id === actions.payload.id)

            if (playerAlreadyOnQueue) return
            state.push(actions.payload)
        },
    },
})

export const { removePlayerOnQueue, addNewPlayerOnQueue } = playersQueueSlice.actions

export const playersQueueReducer = playersQueueSlice.reducer