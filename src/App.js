import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      this.setState({
        time: date.toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>
      </div>
    );
  }
}

export default App;
