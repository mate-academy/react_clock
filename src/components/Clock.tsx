import React from 'react';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

  type State = {
    date: string,
    clockName: string,
  };

export class Clock extends React.Component<{}, State> {
  state: State = {
    date: '',
    clockName: getRandomName(),
  };

  timerid?: NodeJS.Timer;

  timerNameid?: NodeJS.Timer;

  componentDidMount() {
    this.timerid = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    this.timerNameid = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillUpdate(_PrevProps: any, PrevState: State) {
    if (PrevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${PrevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerid) {
      clearInterval(this.timerid);
    }

    if (this.timerNameid) {
      clearInterval(this.timerNameid);
    }
  }

  render() {
    const { clockName, date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
