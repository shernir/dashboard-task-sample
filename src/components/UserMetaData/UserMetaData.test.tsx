/* eslint-disable no-undef */
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { TestHOC } from '../../test.HOC';
import userApiMock from './user.api.mock.json';
import UserMetaData from './UserMetaData';

const UserMetaDataRender = (
  <TestHOC>
    <UserMetaData />
  </TestHOC>
);

// declare API request to mock
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    // use my mock file as a respone
    return res(ctx.json(userApiMock));
  }),
);
// establish API mocking before  test
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserMetaData Component', () => {
  test('check user greeting in api status 200', async () => {
    render(UserMetaDataRender);
    await waitFor(() => {
      // check if the username in the screen equal the username that return from the mock json
      const username = screen.getByText(/Sherif Mounir/i);
      expect(username).toBeInTheDocument();
    });
  });
});
