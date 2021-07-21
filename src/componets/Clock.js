import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.time = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { time } = this.state;

    return (
      <p>
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}
