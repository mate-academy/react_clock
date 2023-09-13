import { Component } from 'react';

interface ClockProps {
  name: string;
  onTimeUpdate: (time: string) => void;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  timerId = 0;

  state: ClockState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentTime });
      this.props.onTimeUpdate(currentTime); // Report time using callback
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
