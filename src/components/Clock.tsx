import React from 'react';

export class Clock extends React.Component {
  state = {
    time: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <p
        id="clock"
        style={{ display: 'block' }}
      >
        Current time:
        {' '}
        {`${this.state.time}`}
      </p>
    );
  }
}
