import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Submit button', () => {
  render(<App />);

  expect(screen.getByLabelText("height")).toBeInTheDocument()
  expect(screen.getByLabelText("width")).toBeInTheDocument()
});

