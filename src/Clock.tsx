import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString()});
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.state.time);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <div className="time">
        {time}
      </div>
    );
  }
}

export default Clock;
