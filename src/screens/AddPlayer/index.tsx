import Box from '@/components/Box';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { containerStyle, createPlayerStyle, headerStyle, inputStyle } from './style';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import Button from '@/components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabType } from '@/routes/types/tabType';
import { TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getPlayers, setPlasyers } from '@/storage/playersStorage';
import { FlatList } from 'react-native-gesture-handler';
import Player from '@/components/Player';
import { PlayerType } from '@/types/Player';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPlayerOnQueue } from '@/feature/playersOnQueue';
import { RootState } from '@/feature/store';



const AddPlayer: React.FC = () => {
    const { colors, spacing } = useTheme<ThemeType>()
    const { bottom, top } = useSafeAreaInsets()
    const navigation = useNavigation<NavigationProp<TabType>>()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [allPlayers, setAllPlayer] = useState<PlayerType[]>(getPlayers() || [])
    const { player1, player2 } = useSelector((state: RootState) => state.playersPlayings)
    const dispatch = useDispatch()

    const handleAddPlayer = () => {
        const newPlayer = {
            id: '222222',
            losses: 3,
            playerName: 'Kaique',
            wins: 5,
        }
        setPlasyers([...allPlayers, newPlayer])
        setAllPlayer(oldPlayers => [...oldPlayers, newPlayer])
    }

    const onSelectPlayer = (player: PlayerType) => {
        if (player1.id === '1') { }
        dispatch(addNewPlayerOnQueue(player))
        navigation.goBack()
    }

    return (
        <Box {...containerStyle} style={{ paddingTop: top + spacing[24] }}>
            <Box {...headerStyle} >
                <Button onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={responsiveSize[24]} color={colors.primaryText} />
                </Button>
                <TextInput
                    style={[inputStyle, { color: colors.primaryText, borderBottomColor: colors.primaryText }]}
                    placeholder='Pesquise o jogador'
                    placeholderTextColor={colors.primaryText}
                />
            </Box>

            <FlatList
                contentContainerStyle={{ paddingTop: spacing[22] }}
                data={allPlayers}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Player {...item} onSelectPlayer={onSelectPlayer} />}
            />

            <Box {...createPlayerStyle} style={{ bottom: bottom + spacing[24] }}>
                <TouchableOpacity onPress={handleAddPlayer}>
                    <AntDesign name="plus" size={responsiveSize[32]} color={colors.secondaryContrast} />
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default AddPlayer;