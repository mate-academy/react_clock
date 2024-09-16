import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
  previousName: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId?: number;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
    previousName: this.props.name,
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });
      // console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <p>
          <strong className="Clock__name">{name}</strong>
          {' time is '}
          <span className="Clock__time">{time}</span>
        </p>
      </div>
    );
  }
}

export default Clock;
