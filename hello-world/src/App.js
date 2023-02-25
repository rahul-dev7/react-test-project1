import React, { Component } from 'react'
import './App.css';
import FRParentInput from './components/FRParentInput';
import ParentComp from './components/ParentComp';
import PortalDemo from './components/PortalDemo';
import RefsDemo from './components/RefsDemo';
import PureComp from './PureComp';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FocusInput/> */}
       {/* <RefsDemo></RefsDemo> */}
       {/* <FRParentInput/> */}
       <PortalDemo></PortalDemo>
      </div>
    )
  }
}

export default App
