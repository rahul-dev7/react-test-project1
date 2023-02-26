import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ErrorBoundary from './components/ErrorBoundary';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import ParentComp from './components/ParentComp';
import PortalDemo from './components/PortalDemo';
import RefsDemo from './components/RefsDemo';
import User from './components/User';
import PureComp from './PureComp';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FocusInput/> */}
       {/* <RefsDemo></RefsDemo> */}
       {/* <FRParentInput/> */}
       {/* <PortalDemo></PortalDemo> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <ClickCounter name="rahul"></ClickCounter> */}
        {/* <HoverCounter></HoverCounter> */}
        <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo>
        <User render={(isLoggedIn) => isLoggedIn ? 'Rahul' : 'Guest'}></User>
      </div>
    )
  }
}

export default App
