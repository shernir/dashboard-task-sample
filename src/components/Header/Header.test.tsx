/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { TestHOC } from '../../test.HOC';

const HeaderRender = (
  <TestHOC>
    <Header />
  </TestHOC>
);

describe('Header Component', () => {
  test('check profile icon display', async () => {
    render(HeaderRender);
    const profileIcon = screen.getByTestId('profile-icon');
    expect(profileIcon).toBeInTheDocument();
  });
  test('check logout icon display', async () => {
    render(HeaderRender);
    const logoutIcon = screen.getByTestId('logout-icon');
    expect(logoutIcon).toBeInTheDocument();
  });
});
