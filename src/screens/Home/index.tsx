import Box from '@/components/Box';
import React, { useState } from 'react';
import { containerStyle, currentPlayersStyle } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import CurrentPlayer from './components/CurrentPlayer';
import Text from '@/components/Text';
import Pontuation from './components/Pontuation';
import Queue from './components/Queue';
import { PlayerType } from '@/types/Player';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';


const Home: React.FC = () => {
    const { top } = useSafeAreaInsets()
    const theme = useTheme<ThemeType>()
    const { player1, player2 } = useSelector((state: RootState) => state.playersPlayings)

    return (
        <Box {...containerStyle} style={{ paddingTop: top + theme.spacing[20] }}>

            <Box {...currentPlayersStyle}>
                <CurrentPlayer player={player1} />
                <Pontuation />
                <CurrentPlayer player={player2} inverse />
            </Box>

            <Queue />
        </Box>
    )
}

export default Home;