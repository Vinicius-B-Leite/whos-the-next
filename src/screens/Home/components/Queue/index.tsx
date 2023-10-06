import Box from '@/components/Box';
import React from 'react';
import { headerStyle, listTitle, queueStyle } from './style';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { FlatList } from 'react-native';
import Player from '@/components/Player';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';
import { TabType } from '@/routes/types/tabType';


const Queue: React.FC = () => {
    const navigation = useNavigation<NavigationProp<TabType>>()
    const players = useSelector((state: RootState) => state.nextPlayerQueue)


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
                data={players}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Player {...item} />}
            />
        </Box>
    )
}

export default Queue;