import { Component } from 'react';
interface ClockProps {
  name: string;
}

export default class Clock extends Component<ClockProps> {
  state = {
    time: this.getTime(),
  };

  timerId: number | null = null;

  getTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = this.getTime();

      this.setState({ time: currentTime });
      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentDidUpdate(prevProps: { name: string }) {
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
