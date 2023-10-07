import Box, { AnimatedBox } from "..";
import { render } from '@testing-library/react-native';




describe('Box and Animated Box', () => {
    it('Box should render in the screen', () => {
        const { UNSAFE_root } = render(<Box />)


        expect(UNSAFE_root.children).toHaveLength(1)
    })
    it('Animated Box should render in the screen', () => {
        const { UNSAFE_root } = render(<AnimatedBox />)


        expect(UNSAFE_root.children).toHaveLength(1)
    })
})