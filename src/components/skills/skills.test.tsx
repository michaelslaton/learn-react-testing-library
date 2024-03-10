import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

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

  it('Start learning button is eventually displayed', async ()=>{ //findby default timeout 1000ms
    const view = render(<Skills skills={skills}/>);
    // logRoles(view.container);
    // screen.debug()
    const startLearningButton = await screen.findByRole('button', {
      name: "Start learning",
    },
    {
      timeout: 2000,
    });
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument();
  });
});