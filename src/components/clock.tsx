import React from 'react';

interface ClockState{
  date: Date,
  timeId?: NodeJS.Timeout
}

export class Clock extends React.Component {
  timeId?: number;

  state:ClockState = {
    date: new Date(),

  };

  componentDidMount() {
    this.timeId = window.setInterval(
      () => this.setState({
        date: new Date(),
      }),
      1000,
    );
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log(this.state.date)
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
