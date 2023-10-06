import Box from '@/components/Box';
import React from 'react';
import { headerStyle, listTitle, queueStyle } from './style';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { FlatList } from 'react-native';
import Player from '@/components/Player';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '1',
        avatar: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg',
        username: 'wezsxrdctfvytub'
    },
    {
        id: '2',
        avatar: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg',
        username: 'wezsxrdctfvytub'
    },
    {
        id: '3',
        avatar: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg',
        username: 'wezsxrdctfvytub'
    },
    {
        id: '4',
        avatar: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg',
        username: 'wezsxrdctfvytub'
    },
    {
        id: '5',
        avatar: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg',
        username: 'wezsxrdctfvytub'
    },
    {
        id: '6',
        avatar: 'https://i.ytimg.com/vi/bORSlhPKSHA/maxresdefault.jpg',
        username: 'wezsxrdctfvytub'
    },
]

const Queue: React.FC = () => {
    const navigation = useNavigation()

    return (
        <Box {...queueStyle}>
            <Box {...headerStyle}>
                <Text {...listTitle}>Próximo</Text>
                <Button variant='secondary' paddingHorizontal={12}>
                    <Text variant='buttonSecondary'>Adicionar jogador</Text>
                </Button>
            </Box>

            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Player {...item} />}
            />
        </Box>
    )
}

export default Queue;