/*
      branch - rctHook-2-usestate-hook
      Below code about rctHook-2-usestate-hook
      Class Component Functionality with State
      
*/ 

import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        count:0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }  
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
