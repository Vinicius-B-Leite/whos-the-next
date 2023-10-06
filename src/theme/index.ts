import { createTheme } from "@shopify/restyle";
import { darkPallete } from "./darkPallet";
import { responsiveSize } from "./responsiveSize";
import { Dimensions } from "react-native";


export const theme = createTheme({
    colors: {
        ...darkPallete
    },
    spacing: {
        ...responsiveSize
    },
    borderRadii: {
        ...responsiveSize,
        full: Dimensions.get('screen').height
    },
    textVariants: {
        defaults: {
        }
    }
})

export type ThemeType = typeof theme
