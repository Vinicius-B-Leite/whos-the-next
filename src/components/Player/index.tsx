import React from 'react';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { boxStyle, imageStyle, textStyle } from './style';
import { Image } from 'react-native';
import LeftSwipeable from './components/LeftSwipeable';
import { PlayerType } from '@/types/Player';
import ImageNotFound from '@/assets/imageNotFound.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { RootState } from '@/feature/store';
import { selectNextPlayer } from '@/feature/playersPlaying';

type Props = PlayerType & {
    onSelectPlayer: (player: PlayerType) => void
}

const Player: React.FC<Props> = ({ onSelectPlayer, ...player }) => {


    return (
        <Swipeable renderLeftActions={() => <LeftSwipeable />}>
            <Button {...boxStyle} onPress={() => onSelectPlayer(player)}>
                <Image
                    source={player.avatarUrl ? { uri: player.avatarUrl } : ImageNotFound}
                    style={{ ...imageStyle }}
                />
                <Text {...textStyle}>{player.playerName}</Text>
            </Button>
        </Swipeable>
    )
}

export default Player;