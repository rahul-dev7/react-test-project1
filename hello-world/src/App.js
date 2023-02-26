import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import CounterNew from './components/CounterNew';
import ErrorBoundary from './components/ErrorBoundary';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import ParentComp from './components/ParentComp';
import PortalDemo from './components/PortalDemo';
import RefsDemo from './components/RefsDemo';
import User from './components/User';
import { UserProvider } from './components/userContext';
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
        {/* <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo>
        <User render={(isLoggedIn) => isLoggedIn ? 'Rahul' : 'Guest'}></User> */}
        {/* <CounterNew
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
        />

        <CounterNew
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}
        /> */}
        <UserProvider value="Rahul">
        <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}

export default App
