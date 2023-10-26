import { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends Component<ClockProps, ClockState> {
  timerId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        <span className="Clock__time">
          {' time is '}
        </span>
        {this.state.time}
      </div>
    );
  }
}
