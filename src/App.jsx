import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'new name',
    oldClockName: 'old name',
  }

  componentDidMount() {
    setInterval(() => {
      const time = new Date();

      if (this.state.isClockVisible) {
        // eslint-disable-next-line
          console.log(time.toLocaleTimeString());
      }
    }, 1000);
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  setRandomName = () => {
    this.setState(prevState => (
      {
        oldClockName: prevState.clockName,
        clockName: Math.ceil(Math.random() * 10),
      }
    ));
    // eslint-disable-next-line no-console
    console.log(
      `The Clock was renamed from
      ${this.state.oldClockName} to ${this.state.clockName}`,
    );
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <p>
          Current time:
          {' '}

          {isClockVisible && <Clock />}

        </p>
        <button
          type="button"
          className="rename"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
        <button
          type="button"
          className="hide-clock"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="show-clock"
          onClick={this.showClock}
        >
          Show Clock
        </button>
      </div>
    );
  }
}
