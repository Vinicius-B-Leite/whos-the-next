import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabRoutes from './tab.routes';
import Box from '@/components/Box';


const Routes: React.FC = () => {
    return (
        <Box flex={1} bg='secondaryBg'>
            <NavigationContainer>
                <TabRoutes />
            </NavigationContainer>
        </Box>
    )
}

export default Routes;