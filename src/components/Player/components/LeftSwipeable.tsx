import Box from '@/components/Box';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Animated, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

type Props = {
    onClickIcon: () => void;
}

const LeftSwipeable: React.FC<Props> = ({ onClickIcon }) => {
    const { colors, } = useTheme<ThemeType>()

    return (
        <RectButton
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: responsiveSize[80],
                height: '100%',
                backgroundColor: colors.darkAlert,
            }}
            onPress={onClickIcon}>
            <Feather name="trash-2" size={responsiveSize[26]} color={colors.alert} />
        </RectButton>
    );
}

export default LeftSwipeable;