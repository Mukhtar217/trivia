import React, { Component } from 'react';
import '../css/App.css';
// import components
import { Questions } from './Questions';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Questions />
      </div>
    );
  }
}

export default App;