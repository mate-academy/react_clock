import React from 'react';

interface State {
  time: Date;
}

export class Clock extends React.Component<{}, State> {
  timerId?: NodeJS.Timer;

  state: State = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <time>
        {`Current time: ${time.toLocaleTimeString()}`}
      </time>
    );
  }
}
