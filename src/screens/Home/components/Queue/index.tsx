import Box, { AnimatedBox } from '@/components/Box';
import React from 'react';
import { headerStyle, listTitle, queueStyle } from './style';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { FlatList } from 'react-native';
import Player from '@/components/Player';
import { TabType } from '@/routes/types/tabType';
import { initGame, selectNextPlayer } from '@/feature/playersPlaying';
import { addNewPlayerOnQueue, removePlayerOnQueue } from '@/feature/playersOnQueue';
import { PlayerType } from '@/types/Player';
import Animated, { FadeIn, FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppNavigation } from '@/hooks/useAppNavigation';


const Queue: React.FC = () => {
    const navigation = useAppNavigation()
    const playersInQueue = useAppSelector((state) => state.nextPlayerQueue)
    const { player1, player2 } = useAppSelector((state) => state.playersPlayings)

    const dispatch = useAppDispatch()

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

            const isNextPlayerAlreadyPlaying = [player1.id, player2.id].includes(player.id)
            if (isNextPlayerAlreadyPlaying) return

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
                            deletePlayerStorage={handleRemovePlayerFromQueue}
                        />
                    </Animated.View>}
            />
        </AnimatedBox>
    )
}

export default Queue;