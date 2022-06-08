import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: number;
  isClockVisible: boolean
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  generateClockName = () => {
    const randomNumber = Math.round(Math.random() * 1000);

    this.setState({ clockName: randomNumber });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <div className="App__wrapper">
          <div className="App__buttons">
            <button type="button" onClick={this.hideClock}>
              Hide clock
            </button>

            <button type="button" onClick={this.showClock}>
              Show clock
            </button>

            <button type="button" onClick={this.generateClockName}>
              Generate name
            </button>
          </div>

          {this.state.isClockVisible
            && <Clock data-cy="time" name={clockName} />}
        </div>
      </div>
    );
  }
}

export default App;
