import React from 'react';
import Clock from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 100),
  };

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      if (this.state.isClockVisible) {
        // eslint-disable-next-line no-console
        console.log(date.toLocaleTimeString());
      }
    }, 1000);
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 100),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <section className="text">
          <h1 className="text__title">React clock</h1>
          <p className="text__subtitle">
            {isClockVisible && <Clock name={clockName} />}
          </p>
        </section>

        <section className="btn">
          <button
            className="btn__clock"
            type="button"
            onClick={this.showClock}
          >
            Show clock
          </button>
          <button
            className="btn__clock"
            type="button"
            onClick={this.hideClock}
          >
            Hide clock
          </button>
          <button
            className="btn__clock"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </section>
      </div>
    );
  }
}

export default App;
