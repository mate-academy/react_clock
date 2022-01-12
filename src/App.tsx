import React from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  isVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  }

  showClock = () => {
    this.setState({ isVisible: true });
  }

  render(): React.ReactNode {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          <button
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          {isVisible && <Clock />}
        </p>
      </div>
    );
  }
}

export default App;
