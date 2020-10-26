import React, { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    name: 0,
    isClockVisible: true,
  };

  randomNum = () => {
    this.setState({
      name: (Math.round(1 + Math.random() * (100 - 1))),
    });
  }

  clear = () => {
    clearInterval(this.timerId);
  }

  toggleVisibility = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  render() {
    const { name, isClockVisible } = this.state;

    return (
      <div className="App">
        {isClockVisible
          ? <Clock />
          : <div>hidden</div>
        }
        <button
          type="button"
          onClick={this.toggleVisibility}
        >
          {isClockVisible ? 'Hide' : 'Show'}
        </button>
        <button type="button" onClick={this.randomNum}>
          Get random number
        </button>
        <p>
          Random number
          {' : '}
          {name}
        </p>
      </div>
    );
  }
}

export default App;
