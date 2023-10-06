import { ThemeType } from '@/theme';
import { createText } from '@shopify/restyle';


const Text = createText<ThemeType>()
export default Text;
export type TextType = React.ComponentProps<typeof Text>