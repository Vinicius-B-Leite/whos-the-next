import Box from '@/components/Box';
import Text from '@/components/Text';
import React from 'react';
import { pontuationsStyle } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';


const Pontuation: React.FC = () => {

    const playersPlayings = useSelector((state: RootState) => state.playersPlayings)
    return (
        <Box justifyContent='center' alignItems='center'>
            <Text {...pontuationsStyle}>
                {playersPlayings[0].points} - {playersPlayings[1].points}
            </Text>
        </Box>
    )
}

export default Pontuation;