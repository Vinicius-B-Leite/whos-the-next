import { BoxProps } from "@/components/Box";
import { TextType } from "@/components/Text";
import { responsiveSize } from "@/theme/responsiveSize";

export const containerStyle: BoxProps = {
    flex: 1,
    backgroundColor: 'secondaryBg',
    paddingHorizontal: 10
}

export const currentPlayersStyle: BoxProps = {
    backgroundColor: 'bg',
    flex: 0.3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
}

