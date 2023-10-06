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

const Tab = createBottomTabNavigator<TabType>()

const TabRoutes: React.FC = () => {
    const { colors, spacing, borderRadii } = useTheme<ThemeType>()
    DefaultTheme.colors.background = colors.darkPrimaryContrast

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.bg,
                    borderTopWidth: 0,
                    margin: spacing[24],
                    borderRadius: borderRadii[14],
                    height: responsiveSize[56],
                    paddingBottom: 0
                },
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