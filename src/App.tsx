import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean
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
      <div className="App">
        <div className="App__wrapper">
          {this.state.isClockVisible
            && <Clock data-cy="time" />}

          <div className="App__buttons">
            <button type="button" onClick={this.hideClock}>
              Hide clock
            </button>

            <button type="button" onClick={this.showClock}>
              Show clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
