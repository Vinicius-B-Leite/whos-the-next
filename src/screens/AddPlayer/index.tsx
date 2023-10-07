import Box from '@/components/Box';
import React, { useMemo, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { containerStyle, createPlayerStyle, headerStyle, inputStyle } from './style';
import { all, useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import Button from '@/components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabType } from '@/routes/types/tabType';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getPlayers, setPlasyers } from '@/storage/playersStorage';
import { FlatList } from 'react-native-gesture-handler';
import Player from '@/components/Player';
import { PlayerType } from '@/types/Player';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPlayerOnQueue } from '@/feature/playersOnQueue';
import { RootState } from '@/feature/store';
import ModalCreatePlayer from '@/components/ModalCreatePlayer';



const AddPlayer: React.FC = () => {
    const { colors, spacing } = useTheme<ThemeType>()
    const { bottom, top } = useSafeAreaInsets()

    const dispatch = useDispatch()

    const navigation = useNavigation<NavigationProp<TabType>>()

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [allPlayers, setAllPlayer] = useState<PlayerType[]>(getPlayers() || [])
    const [playerName, setPlayerName] = useState('')


    const onSelectPlayer = (player: PlayerType) => {
        dispatch(addNewPlayerOnQueue(player))
        navigation.goBack()
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
                renderItem={({ item }) => <Player {...item} onSelectPlayer={onSelectPlayer} />}
            />

            <Box {...createPlayerStyle} style={{ bottom: bottom + spacing[24] }}>
                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                    <AntDesign name="plus" size={responsiveSize[32]} color={colors.secondaryContrast} />
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