/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { Clock } from './components/Clock';

import './App.scss';
import './button.scss';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'Name',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    const newClockName = String(Math.floor(Math.random() * 1000));

    this.setState({ clockName: newClockName });
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="app">
        {
          isClockVisible
            ? <Clock name={clockName} />
            : ''
        }

        <div className="app__buttons">
          <button
            type="button"
            className="button"
            onClick={this.showClock}
          >
            Show
          </button>

          <button
            type="button"
            className="button"
            onClick={this.setRandomName}
          >
            Rename
          </button>

          <button
            type="button"
            className="button"
            onClick={this.hideClock}
          >
            Hide
          </button>
        </div>
      </div>
    );
  }
}

export default App;
