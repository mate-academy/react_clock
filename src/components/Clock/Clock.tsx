import { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  currentTime: Date;
}

function getTimeString(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends Component<ClockProps, ClockState> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newDate = new Date();

      window.console.info(getTimeString(newDate));

      this.setState({ currentTime: newDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    const { name: oldName } = prevProps;
    const { name: currentName } = this.props;

    if (oldName !== currentName) {
      window.console.debug(`Renamed from ${oldName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getTimeString(currentTime)}
        </span>
      </div>
    );
  }
}
