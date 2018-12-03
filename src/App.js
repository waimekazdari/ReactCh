import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>hover me</Button>
      </div>
    );
  }
}

export default App;
