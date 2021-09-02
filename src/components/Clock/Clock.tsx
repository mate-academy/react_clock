import React from 'react';

interface State {
  time: string;
  intervalId?: NodeJS.Timeout | number;
}

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    intervalId: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
    console.log(this.state.time);
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.time}
      </p>
    );
  }
}
