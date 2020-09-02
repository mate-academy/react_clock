import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString('en-GB'),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString('en-GB'),
      });
    }, 1000);
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

export default Clock;
