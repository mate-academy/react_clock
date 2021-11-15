import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 1000);

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        {/* eslint-disable-next-line */}
        {console.log(date.toLocaleTimeString())}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
