import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    const timerId: NodeJS.Timer = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
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
