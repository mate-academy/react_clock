import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

class Clock extends Component<ClockProps, ClockState> {
  timerId: number | undefined;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);
      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(`${newTime}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}

export default Clock;
export { getRandomName };
