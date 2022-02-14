import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    timerId: null,
  };

  componentDidMount() {
    const timerId: NodeJS.Timer = setInterval(() => {
      const date: Date = new Date();

      this.setState({
        date: new Date(),
      });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({
      timerId,
    });
  }

  componentWillUnmount() {
    if (this.state.timerId !== null) {
      clearInterval(this.state.timerId);
    }
  }

  render(): React.ReactNode {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
