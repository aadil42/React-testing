import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

describe('this is greeting suite', () => {
    test('testing Greeting Component', () => {

        // Arrange
        render(<Greeting />);
    
        // act
    
        // assert
        const helloWorldText = screen.getByText(/hello world!/i);
        expect(helloWorldText).toBeInTheDocument();
    });
})
