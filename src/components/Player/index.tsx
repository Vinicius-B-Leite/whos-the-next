import React from 'react';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { boxStyle, imageStyle, textStyle } from './style';
import { Image } from 'react-native';
import LeftSwipeable from './components/LeftSwipeable';

type Props = {
    id: string,
    avatar: string,
    username: string,
}

const Player: React.FC<Props> = ({ id, avatar, username }) => {
    return (
        <Swipeable renderLeftActions={() => <LeftSwipeable />}>
            <Box {...boxStyle}>
                <Image
                    source={{ uri: avatar }}
                    style={{ ...imageStyle }}
                />
                <Text {...textStyle}>{username}</Text>
            </Box>
        </Swipeable>
    )
}

export default Player;