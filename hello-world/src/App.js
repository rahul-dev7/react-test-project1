import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick  from './components/FuctionalClick';
function App() {
  return (
    <div className="App">
      <FunctionClick/>
      {/* <Greet name="Bruce" heroName="Batman">
      </Greet>
      <Greet name="Clark" heroName="Superman">
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
      </Greet>
      <Welcome name="Diana" heroName="Wonder Woman">
      </Welcome>
      <Message></Message> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;

