/* eslint-disable no-console */
import React from 'react';

type ClockProps = {
  clockName: string;
};

type ClockState = {
  today: string;
  hidden: boolean;
  prevClockName: string | null;
};

class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date().toUTCString().slice(-12, -4),
    hidden: false,
    prevClockName: null,
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      console.log(currentTime);
      this.setState({ today: currentTime });
    }, 1000);

    window.addEventListener('contextmenu', this.handleRightClick);
    window.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    window.removeEventListener('contextmenu', this.handleRightClick);
    window.removeEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
      this.setState({ prevClockName: prevProps.clockName });
    }
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hidden: true });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hidden: false });
  };

  render() {
    const { clockName } = this.props;
    const { today, hidden } = this.state;

    if (hidden) {
      return null;
    }

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}

export default Clock;
