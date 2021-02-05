import React, { Component } from 'react';
// import { Clock } from './components/Clock';

import './App.scss';

export class App extends Component {
  state = {
    dataLocalTime: null,
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      this.setState({ dataLocalTime: date.toLocaleTimeString()})
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          { this.state.dataLocalTime }
        </p>
        {/* <Clock /> */}
      </div>
    );
  }
}

export default App;
