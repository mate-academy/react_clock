import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  isClockVisible: boolean;
  clockName: string;
}

const clockNames: string[] = [
  'Elementary clock',
  'Basic clock',
  'A race against the clock',
  'Clock is running',
  'Ukrainian clock UA',
  'Put the clock back',
  'Watching the clock O_O',
  'Rock Around The Clock',
  'Beat the clock',
  'The biological clock is ticking',
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
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="app">
        {isClockVisible && <Clock name={clockName} />}

        <div className="app__buttons">
          <button
            className="buttons__item"
            type="button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            Show Clock
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={this.getClockName}
            disabled={!isClockVisible}
          >
            Random Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
