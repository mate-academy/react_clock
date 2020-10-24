import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  timeInterval = setInterval(() => {
    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ time: date });
  }, 1000);

  componentDidMount() {
    return this.timeInterval;
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { time } = this.state;

    return (
      <>
        <span>{time.toLocaleTimeString()}</span>
      </>
    );
  }
}
