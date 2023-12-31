import Box from '@/components/Box';

import { getPlayerStorage } from '@/storage/playersStorage';
import { PlayerType } from '@/types/Player';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Text from '@/components/Text';
import RankingPlayer from './components/RankingPlayer';
import { responsiveSize } from '@/theme/responsiveSize';

const Ranking: React.FC = () => {
    const [allPlayers, setAllplayers] = useState<PlayerType[]>([])

    useFocusEffect(useCallback(() => {
        setAllplayers(getPlayerStorage() || [])
    }, []))

    function sortByWinsAndLosses(player: PlayerType[]) {
        return player.sort((a, b) => {
            if (b.wins !== a.wins) {
                return b.wins - a.wins;
            } else {
                return a.losses - b.losses;
            }
        });
    }

    return (
        <Box
            flex={1}
            paddingHorizontal={16}
            paddingVertical={24}
        >
            <Text
                variant='screenTitle'
            >Ranking dos jogadores
            </Text>
            <Box
                flex={1}
                paddingTop={24}
            >
                <FlatList
                    testID='rankingList'
                    data={sortByWinsAndLosses(allPlayers)}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Box height={1} backgroundColor='secondaryText' />}
                    renderItem={(props) => <RankingPlayer {...props} />}
                    ListEmptyComponent={() => (
                        <Text
                            color='primaryContrast'
                            fontSize={responsiveSize[14]}
                            fontWeight='bold'
                        >Não há jogadores cadastrados</Text>
                    )}
                />
            </Box>
        </Box >
    )
}

export default Ranking;