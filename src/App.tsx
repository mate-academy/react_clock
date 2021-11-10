import React from 'react';
import { clearInterval } from 'timers';
import './App.scss';

type Props = {};

interface State {
  date: Date;
  timerId: ReturnType<typeof setInterval>;
  isClockVisible: boolean;
}

export class App extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: setInterval(() => {}, 0),
    isClockVisible: true,
  };

  componentDidMount() {
    this.state.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <p>
            {`Current time: ${this.state.date.toLocaleTimeString()}`}
          </p>
        )}

        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>
      </div>
    );
  }
}
