import React from 'react';
import './App.scss';

import clockNames from './api/clockNames.json';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'Центральноевропейское время',
  };

  clockHide = () => {
    this.setState({ isClockVisible: false });
  };

  clockShow = () => {
    this.setState({ isClockVisible: true });
  };

  changeName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: clockNames[Math.floor(Math.random()
          * clockNames.length)],
      });
    }
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.clockShow}
            disabled={isClockVisible}
          >
            Show Clock
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.clockHide}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>
        </div>
        <div className="App__clockName">
          <button
            className="App__button-clockName"
            type="button"
            onClick={this.changeName}
          >
            Set random name
          </button>
          <span className="App__clock-info">{clockName}</span>
        </div>
        {isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
