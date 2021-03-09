import React from 'react';

class Clock extends React.Component {
  state = {}

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p>
        Current Time:
        {' '}
        {this.state.time}
      </p>
    );
  }
}

export default Clock;
