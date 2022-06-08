import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock />)}
        </p>

        <div>
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
        </div>
      </div>
    );
  }
}

export default App;
