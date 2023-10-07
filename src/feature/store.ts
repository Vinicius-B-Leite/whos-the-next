import { configureStore } from '@reduxjs/toolkit'
import { playersQueueReducer } from '@/feature/playersOnQueue'
import { playersPlayingReducer } from './playersPlaying'


export const store = configureStore({
    reducer: {
        nextPlayerQueue: playersQueueReducer,
        playersPlayings: playersPlayingReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch