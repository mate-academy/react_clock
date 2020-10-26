import React, { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    name: 0,
    isClockVisible: true,
  };

  randomNum = () => {
    const newName = (Math.round(1 + Math.random() * (100 - 1)));

    this.setState({
      name: newName,
    });
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${this.state.name} to ${newName}`);
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
        {isClockVisible && <Clock name={name} />}
        <button
          className="button button--first"
          type="button"
          onClick={this.toggleVisibility}
        >
          {isClockVisible ? 'Hide' : 'Show'}
        </button>
        <button
          className="button button--second"
          type="button"
          onClick={this.randomNum}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
