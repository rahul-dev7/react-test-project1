import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
      </Greet>
      <Greet name="Clark" heroName="Superman">
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
      </Greet>

    </div>
  );
}

export default App;

