import AddPlayer from '@/screens/AddPlayer';
import Home from '@/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator()

const HomeStackb: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='AddPlayer'
                component={AddPlayer}
                options={{
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStackb;