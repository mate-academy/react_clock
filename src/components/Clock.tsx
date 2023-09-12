import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  today: Date
};

export class Clock extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId = window.setInterval(() => {
    this.setState({
      clockName: getRandomName(),
      today: new Date(),
    });
  }, 1000);

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
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
