import { Component } from 'react';
import './App';

type State = {
  date: Date;
  clockName: any;
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class Clock extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();
      // eslint-disable-next-line
      console.info(date);
      this.setState({ date });
    }, 1000);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(prevState: State) {
    const { clockName } = this.state;

    if (clockName !== prevState.clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const timeString = date.toLocaleTimeString();

    return (
      <>
        <div className="Clock">
          <strong className="Clock__name">
            {this.state.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {timeString}
          </span>
        </div>
      </>
    );
  }
}
