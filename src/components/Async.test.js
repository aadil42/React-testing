import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('renders asnycronously fetched list', async () => {

        // the fetch funciton is only overwritten in this function.
        // it would stimulate the request without sending it to the server.
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id:'key1', title:'title1'}]
        });
        // Arrange
        render(<Async />);

        // Act
        // nothing to act upon

        // Assert
        const list = await screen.findAllByRole('listitem');
        expect(list).not.toHaveLength(0);
    });
});