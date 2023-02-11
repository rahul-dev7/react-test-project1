import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggingIn: true
      }
    }
    
    
    render() {
        // method 1 in Jsx 
        
        // if(this.state.isLoggingIn) {
        //     return <div>Welcome Rahul</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
        

        // method 2 Varchar Approach
        // let message
        // if(this.state.isLoggingIn) {
        //     message = <div>Welcome Rahul</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        // method 3 conditional Rendering
        // return this.state.isLoggingIn ?
        //     ( 
        //         <div>Welcome Rahul</div> 
        //     ) : ( 
        //         <div>Welcome Guest</div> 
        //     )

        // method 3 short cricuit approach

        return this.state.isLoggingIn && <div>Welcome Rahul</div>

        // use method 3 and method 4
        
        // return (
        //     <div>
        //         <div> Welcome Rahul</div>
        //         <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
