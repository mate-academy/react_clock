import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(), 1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });

    // eslint-disable-next-line
    console.log(this.state.time);
  }

  render() {
    return (
      <span>
        {this.state.time}
      </span>
    );
  }
}
