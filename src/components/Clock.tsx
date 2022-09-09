import React from 'react';

type State = {
  today: Date,
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<{}, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  setDate = 0;

  setClockName = 0;

  componentDidMount() {
    this.setDate = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
    this.setClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.setDate);
    window.clearInterval(this.setClockName);
  }

  render() {
    const { today, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
