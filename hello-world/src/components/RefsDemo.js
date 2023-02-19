import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.cdRef = null;
    this.setCbRef = element => {
      this.cdRef = element
    }
  }
  
  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if(this.cdRef) {
      this.cdRef.focus()
    }
  }

  clickHandler =  () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
