import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStackb from '@/routes/homeStack.routes';
import Ranking from '@/screens/Ranking';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { DefaultTheme } from '@react-navigation/native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { responsiveSize } from '@/theme/responsiveSize';
import { TabType } from '@/routes/types/tabType';
import useTabBarStyle from '@/hooks/useTabBarStyle';

const Tab = createBottomTabNavigator<TabType>()

const TabRoutes: React.FC = () => {
    const { colors, spacing, borderRadii } = useTheme<ThemeType>()
    DefaultTheme.colors.background = colors.secondaryBg

    const tabBarStyle = useTabBarStyle()
    return (
        <Tab.Navigator
            id='tab'
            screenOptions={{
                headerShown: false,
                tabBarStyle: tabBarStyle,
                tabBarActiveTintColor: colors.primaryContrast,
                tabBarInactiveTintColor: colors.darkPrimaryContrast,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: false,
            }}
        >
            <Tab.Screen
                name='HomeStack'
                component={HomeStackb}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={responsiveSize[24]} color={color} />
                }}
            />
            <Tab.Screen
                name='Ranking'
                component={Ranking}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="trophy" size={responsiveSize[24]} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRoutes;