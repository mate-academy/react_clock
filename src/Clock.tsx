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

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.log(this.state);
    }, 1000);

    this.timerIdName = window.setInterval(() => {
      const clockName = this.getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: State) {
    this.timerIdConsoleName = window.setInterval(() => {
      const massage = `Renamed from ${prevState.clockName} to ${this.state.clockName}`;

      // eslint-disable-next-line no-console
      console.log(massage);
    }, 4000);
  }

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
