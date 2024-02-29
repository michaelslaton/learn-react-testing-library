/**
 * Greet should render the text hello if a name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

it('Greet renders correctly', ()=>{
  render(<Greet/>)
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
})
it('Greet renders with a name', ()=>{
  render(<Greet name='Mike'/>)
  const textElement = screen.getByText('Hello Mike')
  expect(textElement).toBeInTheDocument();
})