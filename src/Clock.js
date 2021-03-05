import React from 'react';

import './Clock.scss';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        date: new Date(),
      }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>
          React clock
        </h1>
        <p>
          {`Current time: ${date.toLocaleTimeString()}`}
        </p>
      </div>
    );
  }
}

export default Clock;
