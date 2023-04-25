import { Component } from 'react';

type State = {
  clockName: string,
  today: Date | string,
};

type Props = {
  name: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function getDateString(): string {
  const value = new Date();

  return value.toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    clockName: this.props.name,
    today: getDateString(),
  };

  timerIdForTime = 0;

  timerIdForName = 0;

  componentDidMount(): void {
    this.timerIdForTime = window.setInterval(() => {
      this.setState({ today: getDateString() });
      console.info(this.state.today);
    }, 1000);
    this.timerIdForName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate({}, prevState: Readonly<State>): void {
    if (prevState.today === this.state.today) {
      if (prevState.clockName !== this.state.clockName) {
        console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
      }
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdForTime);
    window.clearInterval(this.timerIdForName);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
