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
import { useDispatch } from 'react-redux';
import { decrementPontuation, incrementPontuation } from '@/feature/playersPlaying';


type Props = {
    inverse?: boolean
    player: PlayerType & { points: number }
}
const CurrentPlayer: React.FC<Props> = ({ inverse = false, player }) => {
    const theme = useTheme<ThemeType>()
    const dispatch = useDispatch()

    const handleIncrementPontuation = () => {
        dispatch(incrementPontuation(player))
    }

    const handleDecrementPontuation = () => {
        if (player.points <= 0) return
        dispatch(decrementPontuation(player))
    }

    return (
        <Box {...boxStyle} flexDirection={inverse ? 'row-reverse' : 'row'}>
            <Box gap={8} justifyContent='center' alignItems='center'>
                <Button {...buttonStyle} onPress={handleIncrementPontuation} testID='plusIconIncrement'
                >
                    <AntDesign
                        name="plus"
                        size={theme.spacing[26]}
                        color={theme.colors.primaryContrast}
                    />
                </Button>
                <Button {...buttonStyle} onPress={handleDecrementPontuation} testID='minusIconDecrement'>
                    <AntDesign

                        name="minus"
                        size={theme.spacing[26]}
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