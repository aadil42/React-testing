import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';
test('testing Greeting Component', () => {

    // Arrange
    render(<Greeting />);

    // act

    // assert
    const helloWorldText = screen.getByText(/hello world!/i);
    expect(helloWorldText).toBeInTheDocument();
});