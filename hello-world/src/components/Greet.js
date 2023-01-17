import React from 'react';

/* Simple Way  */

// function Greet() {
//     return <h1>Hello Rahul</h1>;
// }

/**** Arrow Way ****/ 
//const Greet = () => <h1>Hello Rahul</h1>;


const Greet = props => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet;