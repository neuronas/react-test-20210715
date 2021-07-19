import { render, screen} from '@testing-library/react'
import Grid from './Grid'

const matrix = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]

test("grid is printed", () => {
  const {container} = render(<Grid matrix={matrix}/>)
	expect(container.querySelectorAll(".node")).toHaveLength(100)
})

test("nodes are printed with '-' string", () => {
  render(<Grid matrix={matrix}/>)
	expect(screen.findByText('-')).toBeTruthy()
})
