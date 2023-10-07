import React from 'react';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { boxStyle, imageStyle, textStyle } from './style';
import { Image } from 'react-native';
import LeftSwipeable from './components/LeftSwipeable';
import { PlayerType } from '@/types/Player';
import ImageNotFound from '@/assets/imageNotFound.png';
import Button from '../Button';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

type Props = PlayerType & {
    onSelectPlayer: (player: PlayerType) => void,
    deletePlayer: (player: PlayerType) => void
}

const Player: React.FC<Props> = ({ onSelectPlayer, deletePlayer, ...player }) => {
    const tap = Gesture.Tap().numberOfTaps(2).onEnd(() => {
        runOnJS(onSelectPlayer)(player)
    }).withTestId('tap')


    return (
        <Swipeable
            testID='swipeable'
            renderLeftActions={() =>
                <LeftSwipeable onClickIcon={() => deletePlayer(player)} />}
        >
            <GestureDetector gesture={tap} >
                <Button {...boxStyle} >
                    <Image
                        testID='avatar'
                        source={player.avatarUrl ? { uri: player.avatarUrl } : ImageNotFound}
                        style={{ ...imageStyle }}
                    />
                    <Text {...textStyle}>{player.playerName}</Text>
                </Button>
            </GestureDetector>
        </Swipeable>
    )
}

export default Player;