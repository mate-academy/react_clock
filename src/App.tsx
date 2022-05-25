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

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const randomNumberName = () => {
      this.setState({ clockName: Math.random() });
    };

    return (
      <div className="App">
        {isClockVisible && (
          <Clock name={clockName} />
        )}
        <button
          type="button"
          onClick={showClock}
          disabled={isClockVisible}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={hideClock}
          disabled={!isClockVisible}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={randomNumberName}
          disabled={!isClockVisible}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
