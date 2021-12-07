import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends Component {
  state = {
    clockName: 'Current time',
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({
      clockName: (Math.floor(Math.random() * 100)),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        <div className="App__clock">
          {isClockVisible && <Clock name={clockName} />}
        </div>

        <div className="buttonArea">
          <button
            className="button"
            type="button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            Show clock
          </button>

          <button
            className="button"
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            Hide clock
          </button>

          <button
            className="button"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
