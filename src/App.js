import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 1,
  }

  setRandomName = () => {
    this.setState({
      clockName: (Math.random() * 100).toFixed(0),
    });
  }

  showTime = () => {
    this.setState({ isClockVisible: true });
  }

  hideTime = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          { isClockVisible && <Clock name={clockName} /> }
        </div>
        <button
          type="button"
          onClick={this.showTime}
        >
          Show Time
        </button>
        {' '}
        <button
          type="button"
          onClick={this.hideTime}
        >
          Hide Time
        </button>
        {' '}
        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
