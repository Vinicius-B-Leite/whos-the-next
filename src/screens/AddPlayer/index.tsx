import Box from '@/components/Box';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { containerStyle, createPlayerStyle, headerStyle, inputStyle } from './style';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import Button from '@/components/Button';
import { TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { deletePlayerStorage, getPlayerStorage } from '@/storage/playersStorage';
import { FlatList } from 'react-native-gesture-handler';
import { PlayerType } from '@/types/Player';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import { useDispatch } from 'react-redux';
import { addNewPlayerOnQueue } from '@/feature/playersOnQueue';
import ModalCreatePlayer from '@/components/ModalCreatePlayer';
import Player from '@/components/Player';
import useTabBarStyle from '@/hooks/useTabBarStyle';
import { useAppNavigation } from '@/hooks/useAppNavigation';



const AddPlayer: React.FC = () => {
    const { colors, spacing } = useTheme<ThemeType>()
    const tabBarStyle = useTabBarStyle()
    const { bottom, top } = useSafeAreaInsets()

    const dispatch = useDispatch()

    const navigation = useAppNavigation()

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [allPlayers, setAllPlayer] = useState<PlayerType[]>(getPlayerStorage() || [])
    const [playerName, setPlayerName] = useState('')

    useLayoutEffect(() => {
        const tabBar = navigation.getParent('tab' as unknown as undefined)
        tabBar?.setOptions({
            tabBarStyle: {
                display: 'none'
            }
        })

        navigation.addListener('beforeRemove', () => {
            tabBar?.setOptions({ tabBarStyle })
        })
    }, [])
    const onSelectPlayer = (player: PlayerType) => {
        dispatch(addNewPlayerOnQueue(player))
        navigation.goBack()
    }

    const handledeletePlayerStorage = (player: PlayerType) => {
        const playerListWithoutDeletedPlayer = deletePlayerStorage(player)

        setAllPlayer(playerListWithoutDeletedPlayer!)
    }
    const playersFilteredByName = useMemo(() => {
        return allPlayers.filter(p => p.playerName.toLowerCase().includes(playerName.toLowerCase()))
    }, [playerName, allPlayers])

    return (
        <Box {...containerStyle} style={{ paddingTop: top + spacing[16] }}>
            <Box {...headerStyle} >
                <Button onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={responsiveSize[24]} color={colors.primaryText} />
                </Button>
                <TextInput
                    style={[
                        inputStyle,
                        {
                            color: colors.primaryText,
                            borderBottomColor: colors.primaryText,
                            paddingBottom: spacing[10]
                        }]}
                    placeholder='Pesquise o jogador'
                    placeholderTextColor={colors.secondaryText}
                    value={playerName}
                    onChangeText={setPlayerName}
                />
            </Box>

            <FlatList
                contentContainerStyle={{ paddingTop: spacing[22] }}
                data={playerName ? playersFilteredByName : allPlayers}
                keyExtractor={({ id }) => id}
                renderItem={({ item, index }) => (
                    <Animated.View
                        entering={FadeInDown.duration(300 * index)}
                        exiting={FadeOutDown.duration(500)}>
                        <Player
                            {...item}
                            onSelectPlayer={onSelectPlayer}
                            deletePlayerStorage={handledeletePlayerStorage}
                        />
                    </Animated.View>
                )}
            />

            <Box {...createPlayerStyle} style={{ bottom: bottom + spacing[24] }}>
                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                    <AntDesign
                        testID='plusIcon'
                        name="plus"
                        size={responsiveSize[32]}
                        color={colors.secondaryContrast}
                    />
                </TouchableOpacity>
            </Box>

            <ModalCreatePlayer
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                onSucessPlayerCreated={(player) => setAllPlayer(oldPlayers => [...oldPlayers, player])}
            />
        </Box>
    )
}

export default AddPlayer;