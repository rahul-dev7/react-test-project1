import React, { Component } from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
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
       {/* <PortalDemo></PortalDemo> */}
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary>
      
      </div>
    )
  }
}

export default App
