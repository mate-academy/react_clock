import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerID?: number;

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <>
        <h1>React clock</h1>
        <h2>
          Current time:
          {this.state.date}
        </h2>
      </>
    );
  }
}
