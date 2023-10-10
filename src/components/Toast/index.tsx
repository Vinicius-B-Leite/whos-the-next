import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import Box from '../Box';
import { AntDesign } from '@expo/vector-icons';
import Text from '../Text';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';


export const toastConfig = {
    success: (props: BaseToastProps) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
        />
    ),

    error: ({ text1 }: BaseToastProps) => {
        const theme = useTheme<ThemeType>()
        return (
            <Box
                bg='darkAlert'
                flexDirection='row'
                gap={10}
                justifyContent='center'
                alignItems='center'
                p={14}
                borderRadius={6}
            >
                <AntDesign
                    name="warning"
                    size={responsiveSize[18]}
                    color={theme.colors.alert}
                />
                <Text
                    color='alert'
                    fontSize={responsiveSize[14]}
                >{text1}</Text>
            </Box>
        )
    },
};