import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <>
        <h1>
          Current time:
          {this.state.date.toLocaleTimeString()}
        </h1>
      </>
    );
  }
}
