import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    const timer: NodeJS.Timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);

    this.setState({ timerId: timer });
  }

  componentDidUpdate() {
    console.log(this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId); // method does nothing
  }

  render(): React.ReactNode {
    return this.state.date.toLocaleTimeString();
  }
}
