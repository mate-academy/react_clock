import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(
      () => this.updateClock(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateClock() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <span>
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}
