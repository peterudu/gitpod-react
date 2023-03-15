import logo from './logo.svg';
import './App.css';
import FunctionalGreetingsWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreetings from './components/StatefulGreetings';

function App() {
  return (
    <div className="App">
      <StatefulGreetings greeting="I'm a stateful class component!" name="Bobby" />
    </div>
  );
}

export default App;
