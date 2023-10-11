import React from 'react';
import Text from '@/components/Text';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { boxStyle, imageStyle, textStyle } from './style';
import { Image } from 'expo-image';
import LeftSwipeable from './components/LeftSwipeable';
import { PlayerType } from '@/types/Player';
import ImageNotFound from '@/assets/imageNotFound.png';
import Button from '../Button';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

type Props = PlayerType & {
    onSelectPlayer: (player: PlayerType) => void,
    deletePlayerStorage: (player: PlayerType) => void,
    onLongPress?: () => void,
}

const Player: React.FC<Props> = ({ onSelectPlayer, deletePlayerStorage, onLongPress, ...player }) => {
    const tap = Gesture.Tap().numberOfTaps(2).onEnd(() => {
        runOnJS(onSelectPlayer)(player)
    }).withTestId('tap')


    return (
        <Swipeable
            testID='swipeable'
            renderLeftActions={() =>
                <LeftSwipeable onClickIcon={() => deletePlayerStorage(player)} />}
        >
            <GestureDetector gesture={tap} >
                <Button {...boxStyle} onLongPress={onLongPress} >
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