import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  // timerId!: NodeJS.Timeout;
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

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}
