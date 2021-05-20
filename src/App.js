import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          {`React clock ${clockName || ''}`}
        </h1>

        <p>
          {'Current time: '}
          {isClockVisible && (<Clock name={clockName} />)}
        </p>

        <button
          className="button"
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          className="button button_hide"
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          className="button button_set"
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
