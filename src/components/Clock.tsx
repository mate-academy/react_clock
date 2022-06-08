import React from 'react';

type State = {
  time: string;
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  updateTimer = setInterval(() => {
    this.setState({ time: new Date().toLocaleTimeString() });
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }, 1000);

  componentDidMount() {
    return this.updateTimer;
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  render() {
    return (
      <div data-cy="time">
        {this.state.time}
      </div>
    );
  }
}
