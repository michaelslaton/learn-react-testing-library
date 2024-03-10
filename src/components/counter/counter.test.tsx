import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe('Counter', ()=>{
  it('renders correctly', ()=>{
    render(<Counter/>);
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', {
      name: "Increment",
    })
    expect(incrementButton).toBeInTheDocument();
  })

  it('renders a count of 0', ()=>{
    render(<Counter/>);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  it('renders a count of 1 after clicking the increment button', async ()=>{
    user.setup()
    render(<Counter/>)
    const incrementButton = screen.getByRole('button', {
      name: "Increment",
    })
    await user.click(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  })

  it('renders a count of 2 after clicking the increment button twice', async ()=>{
    user.setup()
    render(<Counter/>)
    const incrementButton = screen.getByRole('button', {
      name: "Increment",
    })
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2');
  })
  // Convenience API --->
  // click()
  // dblClick()
  // tripleClick()
  // hover()
  // unhover()
  // Pointer API --->
  // pointer({keys: '[MouseLeft]'})
  // pointer({keys: '[MouseLeft][MouseRight]'})
  // pointer('[MouseLeft][MouseRight]')
  // pointer('[MouseLeft>]')
  // pointer('[/MouseLeft]')
});
