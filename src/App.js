import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 666,
  }

  visibleTrue = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  visibleFalse = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  rnd = () => {
    this.setState({
      clockName: Math.round(Math.random() * 666),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div>
        <h1>React clock</h1>
        <h2>
          {'Current time: '}
          <span>{isClockVisible && (<Clock name={clockName} />)}</span>
        </h2>

        <button type="button" onClick={this.visibleTrue}>
          Show Clock
        </button>

        <button type="button" onClick={this.visibleFalse}>
          Hide Clock
        </button>

        <button type="button" onClick={this.rnd}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
