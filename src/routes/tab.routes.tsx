import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import HomeStackb from './homeStack.routes';
import Ranking from '@/screens/Ranking';

const Tab = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='HomeStack'
                component={HomeStackb}
            />
            <Tab.Screen
                name='Ranking'
                component={Ranking}
            />
        </Tab.Navigator>
    )
}

export default TabRoutes;