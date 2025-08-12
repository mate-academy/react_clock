import { Component } from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: Date;
}

export class Clock extends Component<ClockProps, ClockState> {
  private timeTimerId: number = 0;

  state: ClockState = {
    time: new Date(),
  };

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      this.setState({ time: new Date() }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.time.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timeTimerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
