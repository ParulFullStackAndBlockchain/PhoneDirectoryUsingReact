import React, {Component} from 'react';
import Header from './Header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>
      </div>
    );
  }
}

export default App;
