import React from 'react'
import { RenderOptions, render } from '@testing-library/react-native'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from '@/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions | undefined) =>
    render(ui, { wrapper: AllTheProviders, ...options })

// override render method
export { customRender }