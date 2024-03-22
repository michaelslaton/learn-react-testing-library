import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
// import { server } from "../../mocks/server";

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe("Users", ()=>{
  it("renders correctly", ()=>{
    render(<Users/>)
    const textElement = screen.getByText("Users")
    expect(textElement).toBeInTheDocument();
  });

  xit('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.getAllByRole('listitem')
    expect(users).toHaveLength(3)
  })
});