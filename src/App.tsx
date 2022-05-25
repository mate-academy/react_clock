import React from 'react';
import Clock from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: Math.random(),
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
    this.setState({ clockName: Math.random() });
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
