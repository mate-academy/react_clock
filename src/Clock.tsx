import { Component } from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: string;
};

export class Clock extends Component<ClockProps> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });
      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="Clock">
          <strong className="Clock__name">{this.props.name}</strong>
          {' time is '}
          <span className="Clock__time">{time}</span>
        </div>
      </div>
    );
  }
}
