import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    shouldChangeName: false,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render(): React.ReactNode {
    const { isClockVisible, shouldChangeName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible
            && <Clock shouldChangeName={shouldChangeName} />}
        </p>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
