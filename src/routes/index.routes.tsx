import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabRoutes from './tab.routes';
import Box from '@/components/Box';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/components/Toast';


const Routes: React.FC = () => {
    return (
        <Box flex={1} bg='secondaryBg'>
            <NavigationContainer>
                <TabRoutes />
            </NavigationContainer>
            <Toast config={toastConfig} />
        </Box>
    )
}

export default Routes;