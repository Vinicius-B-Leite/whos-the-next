import { ThemeType } from "@/theme";
import { BackgroundColorProps, BorderProps, ColorProps, LayoutProps, ShadowProps, SpacingProps, SpacingShorthandProps } from "@shopify/restyle";

export type CommumRestyleProps =
    SpacingProps<ThemeType> &
    ColorProps<ThemeType> &
    BackgroundColorProps<ThemeType> &
    LayoutProps<ThemeType> &
    BorderProps<ThemeType> &
    ShadowProps<ThemeType> &
    SpacingShorthandProps<ThemeType>