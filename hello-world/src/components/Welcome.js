import React, {Component} from "react";

class Welcome extends Component {
    render() {
       // return <h1>Class Component</h1>
       return <h1>Welcome {this.props.name}  a.ka. {this.props.heroName}</h1>
    }
}

export default Welcome;