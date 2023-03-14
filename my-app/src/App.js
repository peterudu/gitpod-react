import logo from './logo.svg';
import './App.css';
import FunctionalGreetingsWithProps from './components/FunctionalGreetingsWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingsWithProps greeting="nice to meet you" name="Mike" age="32"/>
    </div>
  );
}

export default App;
