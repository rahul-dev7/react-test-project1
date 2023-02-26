// install axois for http  package npm install axios
import React, { Component } from 'react'
import './App.css';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* this for get http request  */}
        <PostList></PostList>
      </div>
    )
  }
}

export default App
