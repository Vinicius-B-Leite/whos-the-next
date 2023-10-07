import { TabType } from "@/routes/types/tabType";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => useNavigation<NavigationProp<TabType>>()