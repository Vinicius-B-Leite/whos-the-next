import Box from '@/components/Box';
import Text from '@/components/Text';
import React from 'react';
import { pontuationsStyle } from './style';
import { useAppSelector } from '@/hooks/useAppSelector';


const Pontuation: React.FC = () => {

    const { player1, player2 } = useAppSelector((state) => state.playersPlayings)
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