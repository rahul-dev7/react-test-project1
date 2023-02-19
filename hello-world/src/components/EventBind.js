import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props);
        this.state = {
            message : 'Hello'
        }
        // 3. method
        // this.clickHandler = this.clickHandler.bind(this) 
    }

    /* 
      1 - 3 method
    */
   
    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     console.log(this);
    // }

    // 4. Class Property Arrow Function
    clickHandler = () => {
      this.setState({
          message: 'GoodBye!'
      })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
          {/* 1. binding render method   */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}

          {/* 2. arrow method */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}

          {/* 3. method */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
export default EventBind
