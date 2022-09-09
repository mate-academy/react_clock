import { Component } from 'react';

type State = {
  date: Date,
  clockName:string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<{}, State> {
  state: Readonly<State> = {
    date: new Date(),
    clockName: 'Clock-0',
  };

  clockId = 0;

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.info(date.toLocaleTimeString());

      this.setState({ date });
    }, 1000);

    this.clockId = window.setInterval(() => {
      const { clockName: currClockName } = this.state;

      this.setState({ clockName: getRandomName() });
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${currClockName} to ${this.state.clockName}`);
    }, 3300);
  }

  // componentDidUpdate() {
  //   this.clockId = window.setInterval(() => {
  //     const { clockName: currClockName } = this.state;

  //     this.setState({ clockName: getRandomName() });
  //     // eslint-disable-next-line no-console
  //     console.debug(`Renamed from ${currClockName} to ${this.state.clockName}`);
  //   }, 3300);
  // }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockId);
  }

  render() {
    const { date, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
