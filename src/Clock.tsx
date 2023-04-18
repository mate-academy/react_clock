import { Component } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function formatDate(date: Date) {
  return date.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  clockName: string;
  today: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    clockName: this.props.name,
    today: new Date(),
  };

  timerId = 0;

  counterId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.counterId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(formatDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.counterId);
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formatDate(today)}
        </span>
      </div>
    );
  }
}
