import { customRender } from "@/utils/customRender"
import Ranking from ".."
import { mocks } from "./mock"
import { NavigationContainer } from "@react-navigation/native"
import * as playersStorage from '@/storage/playersStorage'

describe('Ranking', () => {
    it('should render the ranking list', () => {
        const spy = jest.spyOn(playersStorage, 'getPlayerStorage'
        ).mockReturnValueOnce(mocks.players)


        const { getByTestId } = customRender(<NavigationContainer><Ranking /></NavigationContainer>)

        const rankingList = getByTestId('rankingList')
        expect(rankingList.props.data.length).toBeGreaterThan(0)
    })
    it('should render a feedback message when ranking list is empty', () => {
        const { getByText } = customRender(<NavigationContainer><Ranking /></NavigationContainer>)
        const feedbackText = getByText('Não há jogadores cadastrados')

        expect(feedbackText).toBeTruthy()
    })
})