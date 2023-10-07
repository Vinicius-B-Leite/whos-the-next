import Box, { AnimatedBox } from '@/components/Box';
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
import { initGame, selectNextPlayer } from '@/feature/playersPlaying';
import { addNewPlayerOnQueue, removePlayerOnQueue } from '@/feature/playersOnQueue';
import { PlayerType } from '@/types/Player';
import Animated, { FadeIn, FadeInDown, FadeOutDown, FadeOutRight, FadeOutUp, FadingTransition, SlideOutLeft, SlideOutRight } from 'react-native-reanimated';


const Queue: React.FC = () => {
    const navigation = useNavigation<NavigationProp<TabType>>()
    const playersInQueue = useSelector((state: RootState) => state.nextPlayerQueue)
    const { player1, player2 } = useSelector((state: RootState) => state.playersPlayings)

    const dispatch = useDispatch()

    const selectNextPlayerOfQueue = (player: PlayerType) => {
        if (player1.id === '1') {
            dispatch(initGame(player))
            dispatch(removePlayerOnQueue({ index: 0 }))
            return
        }
        if (player2.id === '2') {
            dispatch(initGame(player))
            dispatch(removePlayerOnQueue({ index: 0 }))
            return
        }
        if (playersInQueue[0].id === player.id) {

            const isPlayer1Winner = player1.points > player2.points

            dispatch(addNewPlayerOnQueue(isPlayer1Winner ? player2 : player1))

            if ([player1.id, player2.id].includes(player.id)) return

            dispatch(selectNextPlayer({ nextPlayer: player }))
            dispatch(removePlayerOnQueue({ index: 0 }))

        }
    }

    const handleRemovePlayerFromQueue = (player: PlayerType) => {
        const indexPlayer = playersInQueue.findIndex(p => p.id === player.id)
        if (indexPlayer == -1) return
        dispatch(removePlayerOnQueue({ index: indexPlayer }))
    }

    return (
        <AnimatedBox {...queueStyle} entering={FadeIn.duration(650)}>
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
                renderItem={({ item, index }) =>
                    <Animated.View
                        entering={FadeInDown.duration(300 * index)}
                        exiting={FadeOutUp.duration(500)}>
                        <Player
                            {...item}
                            onSelectPlayer={selectNextPlayerOfQueue}
                            deletePlayer={handleRemovePlayerFromQueue}
                        />
                    </Animated.View>}
            />
        </AnimatedBox>
    )
}

export default Queue;