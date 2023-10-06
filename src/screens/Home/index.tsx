import Box from '@/components/Box';
import React from 'react';
import { containerStyle, currentPlayersStyle } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import CurrentPlayer from './components/CurrentPlayer';
import Text from '@/components/Text';
import Pontuation from './components/Pontuation';
import Queue from './components/Queue';


const Home: React.FC = () => {
    const { top, bottom } = useSafeAreaInsets()
    const theme = useTheme<ThemeType>()

    return (
        <Box {...containerStyle} style={{ paddingTop: top + theme.spacing[20] }}>
            <Box {...currentPlayersStyle}>
                <CurrentPlayer playerName='Cbum' />
                <Pontuation />
                <CurrentPlayer playerName='Vinicius' inverse />
            </Box>

            <Queue />
        </Box>
    )
}

export default Home;