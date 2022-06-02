import React from 'react';
import './App.scss';
import { Clock } from './components';

type State = {
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
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
        <p>
          <strong>Current time:</strong>
          {' '}
          {this.state.isClockVisible
            && (
              <Clock data-cy="time" />
            )}
        </p>
        <div className="App__buttons">
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
      </div>
    );
  }
}

export default App;
