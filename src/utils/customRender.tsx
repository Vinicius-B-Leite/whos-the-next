import React, { PropsWithChildren } from 'react'
import { RenderOptions, render } from '@testing-library/react-native'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from '@/theme'
import { Provider } from 'react-redux'
import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'

import { playersQueueReducer } from '@/feature/playersOnQueue'
import { playersPlayingReducer } from '@/feature/playersPlaying'

const rootReducer = combineReducers({
    nextPlayerQueue: playersQueueReducer,
    playersPlayings: playersPlayingReducer
})


function setupStore(preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>
    store?: ReturnType<typeof setupStore>
}



const customRender = (ui: React.ReactElement, { preloadedState = {}, store = configureStore({ reducer: rootReducer, preloadedState }), ...rest }: ExtendedRenderOptions = {}) => {
    const Wrapper = ({ children }: PropsWithChildren<{}>) => (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>
    )

    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...rest })
    }
}


export { customRender }