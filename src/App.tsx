import './App.css';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/skills';

const skillsList = [
  'HTML',
  'CSS',
]

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={skillsList}/>
    </div>
  );
}

export default App;
