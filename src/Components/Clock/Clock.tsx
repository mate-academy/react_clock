import React from 'react';

export class Clock extends React.Component {
  state = {
    currentDate: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({ currentDate: new Date() });
  }

  render() {
    const { currentDate } = this.state;
    const currentTime = currentDate.toLocaleTimeString('it-IT');

    Console.log(currentTime);

    return currentTime;
  }
}
