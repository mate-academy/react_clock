import React from 'react';

type State = {
  timer: string,
  timerIdState: NodeJS.Timer | undefined,
};

class Clock extends React.Component<{}, State> {
  state = {
    timer: '',
    timerIdState: undefined,
  };

  componentDidMount() {
    const timerId: NodeJS.Timer = setInterval(() => {
      const date: Date = new Date();

      this.setState({ timer: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({ timerIdState: timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerIdState);
  }

  render() {
    return this.state.timer;
  }
}

export default Clock;
