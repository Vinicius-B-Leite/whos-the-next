import Box from '@/components/Box';
import Text from '@/components/Text';
import React from 'react';
import { pontuationsStyle } from './style';


const Pontuation: React.FC = () => {
    return (
        <Box justifyContent='center' alignItems='center'>
            <Text {...pontuationsStyle}>
                10 - 9
            </Text>
        </Box>
    )
}

export default Pontuation;