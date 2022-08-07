import { Component } from 'react';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  date: Date,
};

// type Props = {
//   clockName: string;
// };

export class Clock extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: getRandomName(),
  };

  timerIdTime = 0;

  timerIdName = 0;

  componentDidMount() {
    this.timerIdTime = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);

    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Old name - ${prevState.clockName} and New name ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdTime);
    window.clearInterval(this.timerIdName);
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
