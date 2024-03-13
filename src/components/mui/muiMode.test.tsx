import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe('MuiMode', ()=>{
  // it('renders text correctly', ()=>{
  //   render(<MuiMode/>, {
  //     wrapper: AppProviders,
  //   });
  it('renders text correctly', ()=>{
    render(<MuiMode/>);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});