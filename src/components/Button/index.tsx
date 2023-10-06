
import { ThemeType } from '@/theme';
import { CommumRestyleProps } from '@/types/comumRestyleProps';
import { BackgroundColorProps, BorderProps, ColorProps, LayoutProps, ShadowProps, SpacingProps, backgroundColor, border, createRestyleComponent, layout, spacing, spacingShorthand } from '@shopify/restyle';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

// import { Container } from './styles';
type ButtonPros = CommumRestyleProps & TouchableOpacityProps

const Button = createRestyleComponent<ButtonPros, ThemeType>(
    [spacing, border, backgroundColor, layout, spacingShorthand],
    TouchableOpacity
)

export default Button;
export type ButtonType = React.ComponentProps<typeof Button>