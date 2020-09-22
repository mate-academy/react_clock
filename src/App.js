import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
