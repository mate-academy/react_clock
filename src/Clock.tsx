import { Component } from 'react';

type State = {
  time: Date,
  clockName: string,
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class Clock extends Component<{}, State> {
  state = {
    time: new Date(),
    clockName: getRandomName(),
  };

  public timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
