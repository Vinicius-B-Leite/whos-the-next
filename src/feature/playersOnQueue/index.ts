import { PlayerType } from '@/types/Player'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { playersPlayingReducer } from '../playersPlaying'
import { store } from '../store'


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
            if (state.includes(actions.payload)) return

            const arrayWithIdsOfPlayersPlaying = [store.getState().playersPlayings.player1.id, store.getState().playersPlayings.player2.id]
            if (arrayWithIdsOfPlayersPlaying.includes(actions.payload.id)) return

            const playerAlreadyOnQueue = state.find(p => p.id === actions.payload.id)

            if (playerAlreadyOnQueue) return
            state.push(actions.payload)
        },
    },
})

export const { removePlayerOnQueue, addNewPlayerOnQueue } = playersQueueSlice.actions

export const playersQueueReducer = playersQueueSlice.reducer