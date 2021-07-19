/* eslint-disable no-console */
import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });

      console.log(date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <span>
          {this.state.time}
        </span>
      </>
    );
  }
}

export default Clock;
