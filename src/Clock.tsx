import React from 'react';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 5);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  date: Date,
};

export class Clock extends React.Component<{}, State> {
  state = {
    clockName: getRandomName(),
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(prevProps: State) {
    if (prevProps.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(prevProps.clockName, '---', this.state.clockName);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName, date } = this.state;

    return (
      <div className="clock">
        <strong>{clockName}</strong>
        {' time is '}
        <div className="numbers">
          {date.toLocaleTimeString()}
        </div>
      </div>

    );
  }
}
