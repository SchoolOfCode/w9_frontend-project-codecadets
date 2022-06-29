import { render, screen } from '@testing-library/react';
import App from './App';

test('renders journal page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Journal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders advice page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Advice/i);
  expect(linkElement).toBeInTheDocument();
});