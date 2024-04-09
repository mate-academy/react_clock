/* eslint-disable no-console */

import React from 'react';

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  clockNameProp: string;
  setClockNameProp: React.Dispatch<React.SetStateAction<string>>;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
    clockName: this.props.clockNameProp,
  };

  timerId = 0;

  timerTimeUpdate = 0;

  prevClockName = this.props.clockNameProp;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const prevName = this.prevClockName;
      const newName = getRandomName();

      this.setState({ clockName: newName });
      console.debug(`Renamed from ${prevName} to ${newName}`);

      this.prevClockName = newName;
    }, 3300);

    this.timerTimeUpdate = window.setInterval(() => {
      console.log(new Date().toUTCString().slice(-12, -4));
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerTimeUpdate);
    this.props.setClockNameProp(this.state.clockName);
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <>
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </>
    );
  }
}
