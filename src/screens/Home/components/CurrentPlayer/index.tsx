import Box from '@/components/Box';
import React from 'react';
import { Image } from 'react-native';
import { boxStyle, buttonStyle, imageStyle, textStyle } from './style';
import { AntDesign } from '@expo/vector-icons';
import { textShadow, useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import Button from '@/components/Button';
import ImageNotFound from '@/assets/imageNotFound.png';
import Text from '@/components/Text';
import { PlayerType } from '@/types/Player';


type Props = {
    inverse?: boolean
    player: PlayerType
}
const CurrentPlayer: React.FC<Props> = ({ inverse = false, player }) => {
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
                    source={(player && player.avatarUrl) ? { uri: player.avatarUrl } : ImageNotFound}
                    style={{ ...imageStyle }}
                />
                <Text {...textStyle} numberOfLines={1} >{player?.playerName}</Text>
            </Box>
        </Box>
    )
}

export default CurrentPlayer;