import React from 'react';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { boxStyle, imageStyle, textStyle } from './style';
import { Image } from 'react-native';
import LeftSwipeable from './components/LeftSwipeable';
import { PlayerType } from '@/types/Player';
import ImageNotFound from '@/assets/imageNotFound.png';

type Props = PlayerType

const Player: React.FC<Props> = ({ id, avatarUrl, playerName }) => {
    return (
        <Swipeable renderLeftActions={() => <LeftSwipeable />}>
            <Box {...boxStyle}>
                <Image
                    source={avatarUrl ? { uri: avatarUrl } : ImageNotFound}
                    style={{ ...imageStyle }}
                />
                <Text {...textStyle}>{playerName}</Text>
            </Box>
        </Swipeable>
    )
}

export default Player;