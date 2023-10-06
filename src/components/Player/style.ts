import { BoxType } from "@/components/Box";
import { responsiveSize } from "@/theme/responsiveSize";
import { ImageStyle } from "react-native";
import { TextType } from "@/components/Text";
import { ButtonType } from "../Button";

export const boxStyle: ButtonType = {
    backgroundColor: 'secondaryBg',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: 'bg',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    gap: 10,
    activeOpacity: 0.9
}

export const imageStyle: ImageStyle = {
    width: responsiveSize[44],
    height: responsiveSize[44],
    borderRadius: responsiveSize[44]
}

export const textStyle: TextType = {
    color: 'primaryText',
    fontSize: responsiveSize[18],
}