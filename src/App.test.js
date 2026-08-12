import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  useLocation: () => ({ hash: '' }),
}), { virtual: true });

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Virusan Thavanathan/i })).toBeInTheDocument();
});
