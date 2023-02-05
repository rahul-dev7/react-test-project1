import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggingIn: true
      }
    }
    
    render() {
        if(this.state.isLoggingIn) {
            return <div>Welcome Rahul</div>
        }
        else {
            return <div>Welcome Guest</div>
        }
        // return (
        //     <div>
        //         <div> Welcome Rahul</div>
        //         <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
