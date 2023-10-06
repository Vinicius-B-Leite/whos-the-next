import Box from '@/components/Box';
import React from 'react';
import { headerStyle, listTitle, queueStyle } from './style';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { FlatList } from 'react-native';
import Player from '@/components/Player';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/feature/store';
import { TabType } from '@/routes/types/tabType';
import { selectNextPlayer } from '@/feature/playersPlaying';
import { addNewPlayerOnQueue, removeNextPlayerOnQueue } from '@/feature/playersOnQueue';
import { PlayerType } from '@/types/Player';


const Queue: React.FC = () => {
    const navigation = useNavigation<NavigationProp<TabType>>()
    const playersInQueue = useSelector((state: RootState) => state.nextPlayerQueue)
    const { player1, player2 } = useSelector((state: RootState) => state.playersPlayings)

    const dispatch = useDispatch()

    const selectNextPlayerOfQueue = (player: PlayerType) => {
        if (playersInQueue[0].id === player.id) {

            const isPlayer1Winner = player1.points > player2.points

            dispatch(addNewPlayerOnQueue(isPlayer1Winner ? player2 : player1))
            dispatch(selectNextPlayer({ nextPlayer: player }))
            dispatch(removeNextPlayerOnQueue())

            console.log()
        }
    }

    return (
        <Box {...queueStyle}>
            <Box {...headerStyle}>
                <Text {...listTitle}>Próximo</Text>
                <Button
                    variant='secondary'
                    paddingHorizontal={12}
                    onPress={() => navigation.navigate('HomeStack', { screen: 'AddPlayer' })}
                >
                    <Text variant='buttonSecondary'>Adicionar jogador</Text>
                </Button>
            </Box>

            <FlatList
                data={playersInQueue}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Player {...item} onSelectPlayer={selectNextPlayerOfQueue} />}
            />
        </Box>
    )
}

export default Queue;