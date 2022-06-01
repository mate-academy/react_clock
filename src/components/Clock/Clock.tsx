import React from 'react';

type State = {
  time: string;
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    // eslint-disable-next-line no-console
    console.log('Clock was started');
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
      // eslint-disable-next-line no-console
      console.log('Clock was stopped');
    }
  }

  render() {
    return (
      <span>
        {this.state.time}
      </span>
    );
  }
}
