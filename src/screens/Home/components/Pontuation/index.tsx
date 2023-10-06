import Box from '@/components/Box';
import Text from '@/components/Text';
import React from 'react';
import { pontuationsStyle } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';


const Pontuation: React.FC = () => {

    const { player1, player2 } = useSelector((state: RootState) => state.playersPlayings)
    if (!player1 || !player2) return

    return (
        <Box justifyContent='center' alignItems='center' flex={0.25}>
            <Text {...pontuationsStyle}>
                {player1.points} - {player2.points}
            </Text>
        </Box>
    )
}

export default Pontuation;