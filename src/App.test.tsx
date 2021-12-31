import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/bug tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('it creates a new bug', () =>{
  render(<App/>);
  const inputElement = screen.getByTestId('newBugDescription');
  userEvent.type(inputElement, 'test bug');
  fireEvent.click(screen.getByTestId('addButton'));
  
  expect(screen.getByText(/Add New Bug/i)).toBeInTheDocument();
});