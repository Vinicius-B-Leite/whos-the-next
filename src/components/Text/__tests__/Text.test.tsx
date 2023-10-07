import { customRender } from "@/utils/customRender"
import Text from ".."

describe('Text', () => {
    it('should render children correctly', () => {
        const { getByText } = customRender(<Text>Hello</Text>)

        expect(getByText('Hello')).toBeTruthy()
    })
})