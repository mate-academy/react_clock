import React from 'react';

import './App.scss';
import './Button.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'Initial name',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomClockName = () => {
    const newClockName = String(Math.floor(Math.random() * 1000));

    this.setState({ clockName: newClockName });
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="App" data-cy="time">
        {
          isClockVisible
            ? <Clock name={clockName} />
            : ''
        }

        <div className="App__buttons">
          <button
            type="button"
            className="Button"
            onClick={this.showClock}
          >
            Show
          </button>

          <button
            type="button"
            className="Button"
            onClick={this.setRandomClockName}
          >
            Rename
          </button>

          <button
            type="button"
            className="Button"
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
