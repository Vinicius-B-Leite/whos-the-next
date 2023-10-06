import { BoxType } from "@/components/Box";
import { TextType } from "@/components/Text";
import { responsiveSize } from "@/theme/responsiveSize";

export const queueStyle: BoxType = {
    flex: 0.7,
}

export const headerStyle: BoxType = {
    marginTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
}
export const listTitle: TextType = {
    color: 'primaryText',
    fontWeight: 'bold',
    fontSize: responsiveSize[20],
}
