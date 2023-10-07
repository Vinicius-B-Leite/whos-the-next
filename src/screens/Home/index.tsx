import Box, { AnimatedBox } from '@/components/Box';
import React, { useState } from 'react';
import { containerStyle, currentPlayersStyle } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import CurrentPlayer from './components/CurrentPlayer';
import Pontuation from './components/Pontuation';
import Queue from './components/Queue';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useAppSelector } from '@/hooks/useAppSelector';


const Home: React.FC = () => {
    const { top } = useSafeAreaInsets()
    const theme = useTheme<ThemeType>()
    const { player1, player2 } = useAppSelector((state) => state.playersPlayings)

    return (
        <Box {...containerStyle} style={{ paddingTop: top + theme.spacing[20] }}>

            <AnimatedBox {...currentPlayersStyle} entering={FadeIn.duration(400)}>
                <CurrentPlayer player={player1} />
                <Pontuation />
                <CurrentPlayer player={player2} inverse />
            </AnimatedBox>

            <Queue />
        </Box>
    )
}

export default Home;