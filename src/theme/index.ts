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

        },
        buttonPrimary: {
            color: 'primaryText',
            fontSize: responsiveSize[12],
            fontWeight: 'bold',
            padding: 4,
        },
        buttonSecondary: {
            color: 'secondaryContrast',
            textDecorationLine: 'underline'
        }
    },
    buttonVariants: {
        defaults: {

        },
        primary: {
            backgroundColor: 'primaryContrast',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4

        },
        secondary: {
            backgroundColor: 'darkSecondaryContrast',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4'
        }
    }
})

export type ThemeType = typeof theme
