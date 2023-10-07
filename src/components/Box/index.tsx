import { ThemeType } from '@/theme';
import { CommumRestyleProps } from '@/types/comumRestyleProps';
import { backgroundColor, border, createBox, createRestyleComponent, layout, shadow, spacing, spacingShorthand } from '@shopify/restyle';
import React from 'react';
import { View, ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

// import { Container } from './styles';

const Box = createBox<ThemeType>()
export type BoxType = React.ComponentProps<typeof Box>

type AnimatedBox = CommumRestyleProps & Animated.AnimateProps<ViewProps>
export const AnimatedBox = createRestyleComponent<AnimatedBox, ThemeType>(
    [backgroundColor, spacing, spacingShorthand, layout, border, shadow],
    Animated.View
)
export default Box;