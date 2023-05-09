import { Component } from 'react';

type State = {
  date: Date,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    window.setInterval(() => {
      const date = new Date();

      this.setState({ date });

      // eslint-disable-next-line
      console.info(date);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        <span>
          {' time is '}
        </span>
        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
