import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick  from './components/FuctionalClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
// Styling and Css Basic
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className='styles.success'>Success</h1>
      <h1></h1>
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
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
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Inline></Inline> */}
    </div>
  );
}

export default App;

