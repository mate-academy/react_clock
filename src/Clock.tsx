import React from 'react';

type State = {
  currentTime: string;
};

export class Clock extends React.PureComponent<{}, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  updateClock() {
    this.setState({
      currentTime: new Date().toUTCString().slice(-12, -4),
    });

    // eslint-disable-next-line no-console
    console.info(this.state.currentTime);
  }

  render() {
    const { currentTime } = this.state;

    return (
      currentTime
    );
  }
}
