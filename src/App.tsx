// import { extend } from 'cypress/types/lodash';
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean;
  clockName: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const clockNames: string[] = [
  'Good clock',
  'Amazing clock',
  'Sad clock',
  'Tired clock',
  'Ukrainian clock',
  'Simple clock',
  'Not simple clock',
  'Busy clock',
  'Very nice clock',
  'The clock of my heart',
];

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'Clock',
  };

  getClockName = () => {
    const randomNewName = clockNames[
      Math.floor(Math.random() * clockNames.length)
    ];

    this.setState({ clockName: randomNewName });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        {isClockVisible && <Clock name={clockName} />}

        <div className="buttons">
          <button
            type="button"
            className="buttons__item"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="buttons__item"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="buttons__item"
            onClick={this.getClockName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
