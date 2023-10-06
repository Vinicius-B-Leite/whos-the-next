import { ThemeType } from '@/theme';
import { createBox } from '@shopify/restyle';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Box = createBox<ThemeType>()
export type BoxType = React.ComponentProps<typeof Box>



export default Box;