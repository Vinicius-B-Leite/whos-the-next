import Box from '@/components/Box';
import { FontAwesome5 } from '@expo/vector-icons';
import { color, useTheme } from '@shopify/restyle';
import { ThemeType } from '@/theme';
import { responsiveSize } from '@/theme/responsiveSize';
import Text from '@/components/Text';
import { PlayerType } from '@/types/Player';

type Props = {
  index: number
  item: PlayerType
}
const RankingPlayer: React.FC<Props> = ({ index, item }) => {
  const theme = useTheme<ThemeType>()

  const color = [
    theme.colors.gold,
    theme.colors.silver,
    theme.colors.bronze
  ]
  return (
    <Box
      flexDirection='row'
      paddingVertical={10}
    >
      <Box flex={1} flexDirection='row' alignItems='center' gap={12}>
        {
          index <= 2 ?
            <FontAwesome5
              name="trophy"
              size={responsiveSize[32]}
              color={color[index]}
            /> :
            <Text
              color='primaryText'
              fontWeight='bold'
              fontSize={responsiveSize[24]}
              marginLeft={10}
            >
              {index + 1}
            </Text>
        }
        <Text
          color='primaryText'
          fontSize={responsiveSize[18]}
        >
          {item.playerName}
        </Text>
      </Box>

      <Text fontSize={responsiveSize[18]}>
        <Text color='secondaryContrast'>{item.wins}</Text>
        <Text color='primaryText'>x</Text>
        <Text color='alert'>{item.losses}</Text>
      </Text>
    </Box>
  )
}
export default RankingPlayer;