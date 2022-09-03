/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { TestHOC } from './test.HOC';

const AppRender = (
  <TestHOC>
    <App />
  </TestHOC>
);

describe('App Component layout', () => {
  test('check if SideMenu Component  redered', async () => {
    // @ts-ignore
    await act(async () => render(AppRender));
    const sideMenuTestId = screen.getByTestId('side-menu');
    expect(sideMenuTestId).toBeInTheDocument();
  });

  test('check if Header Component redered', async () => {
    // @ts-ignore
    await act(async () => render(AppRender));

    const headerTestId = screen.getByTestId('header-menu');
    expect(headerTestId).toBeInTheDocument();
  });
});
