import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App container', () => {
    const { getByTestId } = render(<App />);
    const container = getByTestId('app');
    expect(container).toBeTruthy();
  });