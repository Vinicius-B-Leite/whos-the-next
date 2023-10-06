import Box from '@/components/Box';
import React from 'react';
import { Image } from 'react-native';
import { boxStyle, buttonStyle, imageStyle, textStyle } from './style';
import { AntDesign } from '@expo/vector-icons';
import { textShadow, useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import Button from '@/components/Button';
import { responsiveSize } from '@/theme/responsiveSize';
import Text from '@/components/Text';


type Props = {
    inverse?: boolean;
    playerName: string;
}
const CurrentPlayer: React.FC<Props> = ({ inverse = false, playerName }) => {
    const theme = useTheme<ThemeType>()


    return (
        <Box {...boxStyle} flexDirection={inverse ? 'row-reverse' : 'row'}>
            <Box gap={10} >
                <Button {...buttonStyle}>
                    <AntDesign
                        name="plus"
                        size={theme.spacing[20]}
                        color={theme.colors.primaryContrast}
                    />
                </Button>
                <Button backgroundColor='secondaryBg' borderRadius='full' p={4}>
                    <AntDesign
                        name="minus"
                        size={theme.spacing[20]}
                        color={theme.colors.primaryContrast}
                    />
                </Button>
            </Box>
            <Box >
                <Image
                    source={{ uri: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg' }}
                    style={{ ...imageStyle }}
                />
                <Text {...textStyle} numberOfLines={1} >{playerName}</Text>
            </Box>
        </Box>
    )
}

export default CurrentPlayer;