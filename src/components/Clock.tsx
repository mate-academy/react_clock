import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

class Clock extends React.Component<ClockProps, ClockState> {
  private timerId: number | undefined;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });
      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <div className="Clock__time">{this.state.time}</div>
        <div className="Clock__name">{this.props.name}</div>
      </div>
    );
  }
}

export default Clock;
