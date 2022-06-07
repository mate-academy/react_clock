import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean
};

type Props = {};

class App extends React.Component<Props, State> {
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
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock />)}
        </p>

        <div>
          <button type="button" onClick={this.showClock}>
            Show Clock
          </button>

          <button type="button" onClick={this.hideClock}>
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
