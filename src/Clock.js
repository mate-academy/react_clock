import React from 'react';
import './Clock.scss';

class Clock extends React.Component {
  state = {
    time: new Date(),
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
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>React clock</h1>
        <p>
          {`Current time: ${this.state.time.toLocaleTimeString()}`}
        </p>
      </div>
    );
  }
}

export default Clock;
