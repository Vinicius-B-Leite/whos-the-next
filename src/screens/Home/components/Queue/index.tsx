import Box from '@/components/Box';
import React from 'react';
import { headerStyle, listTitle, queueStyle } from './style';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { FlatList } from 'react-native';
import Player from '@/components/Player';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';


const Queue: React.FC = () => {
    const navigation = useNavigation()
    const players = useSelector((state: RootState) => state.nextPlayerQueue)


    return (
        <Box {...queueStyle}>
            <Box {...headerStyle}>
                <Text {...listTitle}>Próximo</Text>
                <Button variant='secondary' paddingHorizontal={12}>
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