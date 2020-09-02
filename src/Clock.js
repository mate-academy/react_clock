import React from 'react';

export class Clock extends React.Component {
  state = {
    timer: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ timer: new Date() })
      , 1000,
    );
  }

  render() {
    return (
      <span>
        {this.state.timer.toLocaleTimeString()}
      </span>
    );
  }
}
