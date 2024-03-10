import './App.css';
import { Application } from './components/application/Application';
import { Counter } from './components/counter/Counter';
import { Skills } from './components/skills/Skills';

const skillsList = [
  'HTML',
  'CSS',
]

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={skillsList}/>
      <Counter/>
    </div>
  );
}

export default App;
