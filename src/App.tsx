import React from 'react';
import './App.scss';
import { names } from './FunnyNames';
import { Clock } from './components/CLock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: names[Math.floor(Math.random() * names.length)],
  };

  componentDidMount() {
    this.setState({ isClockVisible: true });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomNumberName = () => {
    // eslint-disable-next-line
    this.setState({ clockName: names[Math.floor(Math.random() * names.length)] });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible && (
          <Clock name={clockName} />
        )}
        <button
          type="button"
          onClick={this.showClock}
          disabled={isClockVisible}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          disabled={!isClockVisible}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={this.randomNumberName}
          disabled={!isClockVisible}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
