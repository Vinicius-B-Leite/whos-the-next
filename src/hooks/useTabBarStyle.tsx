import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const useTabBarStyle = () => {
    const { colors, spacing, borderRadii } = useTheme<ThemeType>()

    return {
        backgroundColor: colors.bg,
        borderTopWidth: 0,
        margin: spacing[24],
        borderRadius: borderRadii[14],
        height: responsiveSize[56],
        paddingBottom: 0
    }
}

export default useTabBarStyle;