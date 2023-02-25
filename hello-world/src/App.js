import React, { Component } from 'react'
import './App.css';
import FRParentInput from './components/FRParentInput';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import PureComp from './PureComp';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FocusInput/> */}
       {/* <RefsDemo></RefsDemo> */}
       <FRParentInput/>
      </div>
    )
  }
}

export default App
