import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users", ()=>{
  it("renders correctly", ()=>{
    render(<Users/>)
    const textElement = screen.getByText("Users")
    expect(textElement).toBeInTheDocument();
  })
})