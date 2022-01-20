import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): React.ReactNode {
    return this.state.date.toLocaleTimeString();
  }
}
