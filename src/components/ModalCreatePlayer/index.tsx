import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../Button';
import { closeBtnStyle, containerStyle, createPlayerBtnStyle, mainContainer, pickImageStyle, usernameInputStyle } from './style';
import Box from '../Box';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import Text from '../Text';
import { getPlayerStorage, setPlayerStorage } from '@/storage/playersStorage';
import { PlayerType } from '@/types/Player';
import uuid from 'react-native-uuid';




type Props = {
    visible: boolean,
    onRequestClose: () => void,
    onSucessPlayerCreated: (player: PlayerType) => void
}

const ModalCreatePlayer: React.FC<Props> = ({ visible, onRequestClose, onSucessPlayerCreated }) => {
    const { colors } = useTheme<ThemeType>()
    const [username, setUsername] = useState('')


    const handleAddPlayer = () => {
        if (!username) return

        const allPlayers = getPlayerStorage()
        const newPlayer: PlayerType = {
            id: uuid.v4().toString(),
            losses: 0,
            wins: 0,
            playerName: username,
            avatarUrl: ''
        }
        setPlayerStorage(allPlayers ? [...allPlayers, newPlayer] : [newPlayer])
        onSucessPlayerCreated(newPlayer)
        onRequestClose()
        setUsername('')
    }

    return (
        <Modal
            animationType='fade'
            transparent
            visible={visible}
            onRequestClose={onRequestClose}>


            <Box {...mainContainer}>
                <TouchableOpacity
                    style={[closeBtnStyle, { backgroundColor: colors.tranparentBg, }]}
                    onPress={onRequestClose} />
                <Box height='55%' width={'100%'}>
                    <ScrollView
                        style={[{ backgroundColor: colors.bg, }, containerStyle]}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                        <Button {...pickImageStyle}>
                            <Entypo name="camera" size={responsiveSize[32]} color={colors.primaryContrast} />
                        </Button>
                        <TextInput
                            style={[
                                usernameInputStyle,
                                {
                                    backgroundColor: colors.secondaryBg,
                                    color: colors.primaryText,
                                    fontSize: responsiveSize[14],
                                }
                            ]}
                            placeholderTextColor={colors.secondaryText}
                            placeholder='Nome do novo jogador'
                            value={username}
                            onChangeText={setUsername}
                        />

                        <Button variant='primary' {...createPlayerBtnStyle} onPress={handleAddPlayer}>
                            <Text variant='buttonPrimary'>Criar</Text>
                        </Button>
                    </ScrollView>
                </Box>
            </Box>

        </Modal>
    )
}

export default ModalCreatePlayer;