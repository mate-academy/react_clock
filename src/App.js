import React from 'react';

import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    clockName: Math.ceil(Math.random() * 100),
    isClockVisible: true,
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      if (this.state.isClockVisible) {
        // eslint-disable-next-line no-console
        console.log(date.toLocaleTimeString());
      }
    }, 1000);
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 100),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { isClockVisible && <Clock name={clockName} />}
        <div className="buttons-list">
          <button
            className="buttons-list__button"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            className="buttons-list__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            className="buttons-list__button"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
