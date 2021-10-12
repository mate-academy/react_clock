import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isVisibleClock: boolean;
  clockName: string;
};

const randomNames: string[] = ['John\'s clock', 'Rebeka\'s clock',
  'Nick\'s clock', 'Jacob\'s clock', 'David\'s clock', 'Abraham\'s clock'];

class App extends React.Component<Props, State> {
  state = {
    isVisibleClock: false,
    clockName: '',
  };

  handleShowClock = () => {
    this.setState({ isVisibleClock: true });
  };

  handleHideClock = () => {
    this.setState({ isVisibleClock: false });
  };

  handleRandomClockName = () => {
    const nameIndex = Math.floor(Math.random() * randomNames.length);

    this.setState({ clockName: randomNames[nameIndex] });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isVisibleClock && (
          <p>
            Current time:
            {' '}
            <Clock name={this.state.clockName} />
          </p>
        )}

        <button
          onClick={this.handleShowClock}
          className="button"
          type="button"
        >
          Show
        </button>
        <button
          onClick={this.handleHideClock}
          className="button"
          type="button"
        >
          Hide
        </button>
        <button
          onClick={this.handleRandomClockName}
          className="button"
          type="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
