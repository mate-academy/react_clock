import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerId?: number;

  state: Readonly<ClockState> = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();
      const currentTime = today.toUTCString().slice(-12, -4);

      this.setState({ currentTime });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
