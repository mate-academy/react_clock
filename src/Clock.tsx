import { Component } from 'react';

function getRandomName(): string {
  const value = Math.random()
    .toString()
    .slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  clockName: string,
};

export class Clock extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: getRandomName(),
  };

  public timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
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
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
