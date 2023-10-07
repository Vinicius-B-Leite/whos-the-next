import { fireEvent } from '@testing-library/react-native'
import Button from '..'
import { customRender } from '@/utils/customRender'
import Text from '@/components/Text'


describe('Button', () => {
    it('should render', () => {
        const { UNSAFE_root } = customRender(<Button />)

        expect(UNSAFE_root.children.length).toBeGreaterThan(0)
    })

    it('should called function when button was clicked', () => {
        const jsFn = jest.fn()
        const { getByText } = customRender(
            <Button onPress={jsFn}>
                <Text>Hello</Text>
            </Button>
        )
        fireEvent.press(getByText('Hello'))

        expect(jsFn).toBeCalled()
    })


})