import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setInterval(() => { }, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <p>
        Current time:
        <br />
        {' '}
        {this.state.time}
      </p>
    );
  }
}
