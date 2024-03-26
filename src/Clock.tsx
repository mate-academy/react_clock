import React from 'react';

interface ClockProps {
  name: string; // Now 'name' is recognized as a valid prop
}

interface ClockState {
  time: string;
}

class Clock extends React.Component<ClockProps, ClockState> {
  timerID?: NodeJS.Timeout;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    this.setState({
      time: currentTime,
    });
    // eslint-disable-next-line no-console
    console.log(currentTime);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

export default Clock;
