import { render, screen, fireEvent } from '@testing-library/react'
import Board from './index'

const cluster = [
  [ [2, 3] ]
]

test('renders Submit button', () => {
  render(<Board size={{height: 10, width: 10}} />)

  const linkElement = screen.getByText(/Submit/i)
  expect(linkElement).toBeInTheDocument()
});

test("will toggle string when clicked a node", () => {
  render(<Board size={{height: 10, width: 10}} />)

  const node = screen.getAllByText("-")[0]
  fireEvent.click(node);
  expect(node).toHaveTextContent('o')
  fireEvent.click(node);
  expect(node).toHaveTextContent('-')
});

test("will call the getClusters function properly when submit button is clicked", () => {
  const getClustersMock = jest.fn()
  render(<Board size={{height: 10, width: 10}} sendNodes={getClustersMock}/>)

  fireEvent.click(screen.getByText("Submit"))
  expect(getClustersMock).toHaveBeenCalledTimes(1)
});

test('will draw the grid with clusters', () => {
  const { container } = render(<Board size={{height: 10, width: 10}} clusters={cluster}/>)

  const node = container.querySelectorAll('.node')[32]
  expect(node).toHaveTextContent("1")
});