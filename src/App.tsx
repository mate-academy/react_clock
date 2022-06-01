import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
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
      <div className="content is-large block">
        <h1>React clock</h1>
        <span>
          Current time:
          {' '}
        </span>
        {this.state.isClockVisible && (
          <Clock data-cy="time" />
        )}
        <div>
          <button
            type="button"
            onClick={this.showClock}
            className="button is-primary is-rounded is-large is-responsive"
          >
            Show clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
            className="button is-danger is-rounded is-large is-responsive"
          >
            Hide clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
