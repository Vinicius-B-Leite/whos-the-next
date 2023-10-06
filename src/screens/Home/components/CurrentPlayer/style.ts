import { BoxType } from "@/components/Box";
import { ButtonType } from "@/components/Button";
import { TextType } from "@/components/Text";
import { responsiveSize } from "@/theme/responsiveSize";
import { Image, ImageStyle, StyleProp } from "react-native";

export const boxStyle: BoxType = {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
}

export const buttonStyle: ButtonType = {
    backgroundColor: 'secondaryBg',
    borderRadius: 'full',
    p: 4
}

export const imageStyle: ImageStyle = {
    width: responsiveSize[80],
    height: responsiveSize[80],
    borderRadius: 80,
}

export const textStyle: TextType = {
    textAlign: 'center',
    color: 'primaryText',
    fontWeight: 'bold',
    marginTop: 10,
}