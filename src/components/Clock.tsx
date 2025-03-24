import { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
  isVisible: boolean;
}

export class Clock extends Component<ClockProps, ClockState> {
  private timerId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
    isVisible: true, // Добавляем состояние видимости
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      if (this.state.isVisible) {
        this.setState({ time: new Date().toUTCString().slice(-12, -4) });
        // eslint-disable-next-line no-console
        console.log(`Current time: ${this.state.time}`);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

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
