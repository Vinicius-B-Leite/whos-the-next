import { BoxType } from "@/components/Box";
import { responsiveSize } from "@/theme/responsiveSize";
import { StyleProp, TextStyle } from "react-native";

export const containerStyle: BoxType = {
    flex: 1,
    backgroundColor: 'secondaryBg',
    padding: 16,
    position: 'relative',
}

export const headerStyle: BoxType = {
    flexDirection: 'row',
    gap: 12
}

export const inputStyle: StyleProp<TextStyle> = {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: responsiveSize[16]
}

export const createPlayerStyle: BoxType = {
    position: 'absolute',
    right: responsiveSize[24],
    backgroundColor: 'darkSecondaryContrast',
    padding: 20,
    borderRadius: 80
}