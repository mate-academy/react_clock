import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  today: Date,
};

export class Clock extends React.Component {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  timerId = 0;

  timerId2 = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.setClockName, 3300);
    this.timerId2 = window.setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    clearInterval(this.timerId2);
  }

  setClockName = () => {
    // eslint-disable-next-line
    console.debug(this.state.clockName);

    this.setState({
      clockName: getRandomName(),
    });

    // eslint-disable-next-line
    console.debug(this.state.clockName);
  };

  setTime = () => {
    this.setState({
      today: new Date(),
    });

    // eslint-disable-next-line
    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render() {
    const { today, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
