import React from 'react';
import './App.scss';
import { Clock } from './componets/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component <{}, State> {
  state = {
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <p>
            Current time:
            {' '}
            <Clock data-cy="time" />
          </p>
        )}
        <button
          type="button"
          onClick={this.showClock}
          className="App__button App__button--first"
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
          className="App__button"
        >
          Hide clock
        </button>
      </div>
    );
  }
}

export default App;
