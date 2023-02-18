import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Rahul'
      }
      console.log('LifecycleA constructor');
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    changeState = () => {
        this.setState({
            name: 'WindIdeas'
        })
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');

    }

    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB></LifecycleB>
            </div>
          
        )
    }
}

export default LifecycleA
