import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  intervalId: number | null = null;

  state: ClockState = {
    time: '',
  };

  componentDidMount() {
    this.setState({ time: this.getCurrentTime() });
    this.intervalId = window.setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getCurrentTime = () => {
    return new Date().toUTCString().slice(-12, -4);
  };

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
