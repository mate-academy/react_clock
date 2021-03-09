import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      const { date } = this.state;

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <p>
        Current time:
        {this.state.time}
      </p>
    );
  }
}

export default Clock;
