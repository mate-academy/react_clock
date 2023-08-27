import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: string;
  hasClock: boolean;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
  };

  clockNameInterval: NodeJS.Timeout | null = null;

  clockTimeInterval: NodeJS.Timeout | null = null;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.startClockTimeUpdate();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    this.stopUpdatingClockTime();
  }

  static getRandomName() {
    const randomNum = Math.floor(Math.random() * 10);

    return `Clock-${randomNum}`;
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  stopUpdatingClockName = () => {
    if (this.clockNameInterval !== null) {
      clearInterval(this.clockNameInterval);
    }
  };

  stopUpdatingClockTime = () => {
    if (this.clockTimeInterval !== null) {
      clearInterval(this.clockTimeInterval);
    }
  };

  updateClockTime = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);

    this.setState({ currentTime: newTime });
  };

  startClockTimeUpdate() {
    this.clockTimeInterval = setInterval(this.updateClockTime.bind(this), 1000);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    if (!this.state.hasClock) {
      return null;
    }

    return (
      <div className="Clock">
        <strong>{name}</strong>
        {' '}
        time is
        {' '}
        {currentTime}
      </div>
    );
  }
}
