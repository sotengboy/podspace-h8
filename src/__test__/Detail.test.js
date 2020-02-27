import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App.js';

test('has button', () => {
  const { container } = render(<App />);
  const buttons = container.querySelectorAll('button');
});