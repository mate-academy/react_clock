import { Component } from 'react';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  date: Date;
  clockName: string;
};

export class Clock extends Component<{}, State> {
  state: Readonly<State> = {
    date: new Date(),
    clockName: getRandomName(),
  };

  timerId = 0;

  randomName = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);

    this.randomName = window.setInterval(() => {
      const oldName = this.state.clockName;

      this.setState({ clockName: getRandomName() });
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${oldName} to ${this.state.clockName}`);
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.randomName);
  }

  render() {
    const { clockName, date } = this.state;

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
