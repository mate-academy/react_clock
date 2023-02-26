/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    clockName: this.props.name,
  };

  timerId = 0;

  timerPrint = 0;

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.timerPrint = window.setInterval(() => {
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate() {
    const { clockName } = this.state;

    this.timerId = window.setInterval(() => {
      const oldName = clockName;
      const newName = getRandomName();

      this.setState({ clockName: newName });
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerPrint);
  }

  render() {
    const { clockName, today } = this.state;

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
