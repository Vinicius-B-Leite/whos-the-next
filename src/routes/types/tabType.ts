import { NavigatorScreenParams } from "@react-navigation/native"
import { HomeType } from "@/routes/types/homeType"

export type TabType = {
    HomeStack: NavigatorScreenParams<HomeType>,
    Ranking: undefined
}