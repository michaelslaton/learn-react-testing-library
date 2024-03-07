import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", ()=>{
  const skills = ['HTML', 'CSS', "JavaScript"];

  it("Renders correctly", ()=> {
    render(<Skills skills={skills}/>);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('renders a list of skills', ()=>{
    render(<Skills skills={skills}/>);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  it('renders Login button', ()=>{
    render(<Skills skills={skills}/>);
    const loginButton = screen.getByRole('button', {
      name: 'Login'
    })
    expect(loginButton).toBeInTheDocument();
  });

  it('Start Learning button is not rendered', ()=>{
    render(<Skills skills={skills}/>);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument();
  });
});