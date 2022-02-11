/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';

type ClockProps = {
  name: string | number;
};

type ClockStates = {
  date: string;
};

class Clock extends React.Component<ClockProps, ClockStates> {
  state = {
    date: (new Date()).toLocaleTimeString(),
  };

  timerId: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    this.timerId = setInterval(() => {
      this.setState({ date: (new Date()).toLocaleTimeString() });
      console.log(this.state.date);
    }, 1000);
  }

  componentDidMount() {
    return this.timerId;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    return (
      <span>
        {this.state.date}
      </span>
    );
  }
}

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render(): React.ReactNode {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible
            && <Clock name={this.state.clockName} />}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true});
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false});
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false});
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
