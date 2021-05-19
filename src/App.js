import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
    isClockVisible: true,
    clockName: null,
    getInterval() {
      return setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000);
    },
  };

  componentDidMount() {
    this.interval = this.state.getInterval.call(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isClockVisible, clockName } = prevState;

    if (!this.state.isClockVisible) {
      clearTimeout(this.interval);
    }

    if (this.state.isClockVisible && !isClockVisible) {
      this.interval = this.state.getInterval.call(this);
    }

    if (this.state.clockName !== clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    const {
      date,
      isClockVisible,
      clockName,
    } = this.state;

    const showClock = () => {
      this.setState({
        isClockVisible: true,
        date: new Date(),
      });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setRandomName = () => {
      this.setState({ clockName: Math.floor(Math.random() * 100) });
    };

    return (
      <div className="App">
        <h1>
          React clock
          {' '}
          {clockName}
        </h1>

        <p>
          Current time:
          {' '}
          {isClockVisible && date.toLocaleTimeString()}
        </p>

        <button
          className="button"
          type="button"
          onClick={showClock}
        >
          Show Clock
        </button>

        <button
          className="button button_hide"
          type="button"
          onClick={hideClock}
        >
          Hide Clock
        </button>

        <button
          className="button button_set"
          type="button"
          onClick={setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
