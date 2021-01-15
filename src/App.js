import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  state = {
    date: null,
  };

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      this.setState({ date: date.toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </div>
    );
  }
}

export default App;
