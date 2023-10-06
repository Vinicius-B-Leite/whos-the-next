import Box from '@/components/Box';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Animated, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


const LeftSwipeable: React.FC = () => {
    const { colors, } = useTheme<ThemeType>()

    return (
        <RectButton style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: responsiveSize[80],
            height: '100%',
            backgroundColor: colors.darkAlert,
        }}>
            <Feather name="trash-2" size={responsiveSize[26]} color={colors.alert} />
        </RectButton>
    );
}

export default LeftSwipeable;