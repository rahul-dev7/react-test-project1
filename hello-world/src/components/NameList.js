import React from 'react'
import Person from './Person';
function NameList() {
    //1. method 
    // const names = ['Brance', 'Clark', 'Dinna'];
    // const nameList = names.map(name => <h2>{name}</h2>);

    // return (
    //     <div>{nameList}</div>
    // )
    
    //2. method is best way.
    // const persons = [
    //     {   
    //         id: 1,
    //         name: "Rahul",
    //         age: 10,
    //         skill: 'React'
    //     },
    //     {   
    //         id: 2,
    //         name: "Anup",
    //         age: 40,
    //         skill: "Angular"
    //     },
    //     {   
    //         id: 3,
    //         name: "Ashish",
    //         age: 20,
    //         skill: ".Net"
    //     },
    //     {   
    //         id: 4,
    //         name: "nitin",
    //         age: 50,
    //         skill: "Php"
    //     },
    // ];

    // const personsList = persons.map(person => <Person key={person.id} person={person}></Person>);
    // return <div>{personsList}</div>

    //index as key anti pattern
     const names = ['Brance', 'Clark', 'Dinna'];
     const personsList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>);
     return <div>{personsList}</div>


}

export default NameList
