import { Component } from 'react';

type State = {
  date: Date;
  clockName: string,
};

export class Clock extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: this.getRandomName(),
  };

  timerId = 0;

  timerIdName = 0;

  timerIdConsoleName = 0;

  prevName = this.state.clockName;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);

    this.timerIdName = window.setInterval(() => {
      const clockName = this.getRandomName();

      this.setState({ clockName });
      // eslint-disable-next-line no-console
      console.log(this.state.clockName);
    }, 3300);

    this.timerIdConsoleName = window.setInterval(() => {
      const massage = `Renamed from ${this.prevName} to ${this.state.clockName}`;

      // eslint-disable-next-line no-console
      console.log(massage);
    }, 4000);
  }

  // componentDidUpdate(_: {}, prevState: State) {
  //   // this.prevName = prevState.clockName;
  // }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerIdName);
    window.clearInterval(this.timerIdConsoleName);
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomName() {
    const value = Math.random().toString().slice(2, 6);

    return `Clock-${value}`;
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.state;

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
