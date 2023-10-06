
import { ThemeType } from '@/theme';
import { CommumRestyleProps } from '@/types/comumRestyleProps';
import { VariantProps, backgroundColor, border, createRestyleComponent, createVariant, layout, spacing, spacingShorthand } from '@shopify/restyle';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

// import { Container } from './styles';
type ButtonPros = CommumRestyleProps & TouchableOpacityProps &
    VariantProps<ThemeType, 'buttonVariants'>;

const Button = createRestyleComponent<ButtonPros, ThemeType>(
    [spacing, border, backgroundColor, layout, spacingShorthand, createVariant({ themeKey: 'buttonVariants' })],
    TouchableOpacity,
)

export default Button;
export type ButtonType = React.ComponentProps<typeof Button>