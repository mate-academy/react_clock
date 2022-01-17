import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer | undefined;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ date: date.toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.date);

    return this.state.date;
  }
}
