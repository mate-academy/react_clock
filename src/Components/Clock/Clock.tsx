import React from 'react';

type State = {
  currentDate: Date,
};

export class Clock extends React.Component<{}, State> {
  state = {
    currentDate: new Date(),
  };

  timer?: NodeJS.Timeout;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { currentDate } = this.state;
    const currentTime = currentDate.toLocaleTimeString();

    // eslint-disable-next-line no-console
    console.log(currentTime);

    return currentTime;
  }
}
