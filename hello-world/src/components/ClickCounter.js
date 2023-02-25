import React, { Component } from 'react'
import withCounter from './withCounter';
import UpdateComponent from './withCounter';
class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.state;
        return (
        <div>
            <button onClick={incrementCount}>  Clicked {count} times</button>
        </div>
        )
    }
}

export default withCounter(ClickCounter)
