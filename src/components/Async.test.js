import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('renders asnycronously fetched list', async () => {
        // Arrange
        render(<Async />);

        // Act
        // nothing to act upon

        // Assert
        const list = await screen.findAllByRole('listitem');
        expect(list).not.toHaveLength(0);
    });
});