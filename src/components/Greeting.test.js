import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('renders "hello world".', () => {

        // Arrange
        render(<Greeting />);
    
        // act
    
        // assert
        const helloWorldText = screen.getByText(/hello world!/i);
        expect(helloWorldText).toBeInTheDocument();
    });

    test('renders "It\'s good to see you!" when the button is not clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // nothing to act

        // Assert
        const text = screen.getByText(/It's good to see you!/i);
        expect(text).toBeInTheDocument();
    });

    test('renders "Changed!" if the button is clicked', () => {
        //Arrange
        render(<Greeting />);

        // Act
        const btn = screen.getByRole('button');
        userEvent.click(btn);

        // Assert
        const text = screen.getByText(/Changed!/i);
        expect(text).toBeInTheDocument();
    });

    test('removes "It\'s good to see you!" once the button is clicked', () => {

        //Arrange
        render(<Greeting />);

        // Act
        const btn = screen.getByRole('button');
        userEvent.click(btn);

        // Assert
        const text = screen.queryByText(/It's good to see you!/i);
        expect(text).toBeNull();
    });

})
