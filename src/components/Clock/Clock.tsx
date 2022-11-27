import React from 'react';

export function getRandomName(): string {
  const value = (Date.now()).toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date,
  clockName: string,
};

type Props = {
  clockName: string,
};

let nametimerID: number;
let clocktimerID: number;

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    /* eslint-disable react/no-unused-state */
    clockName: this.props.clockName,
  };

  componentDidMount() {
    nametimerID = window.setInterval(
      () => this.updateClockName(),
      3300,
    );
    clocktimerID = window.setInterval(
      () => this.updateClock(),
      1000,
    );
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      /* eslint-disable no-console */
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(nametimerID);
    window.clearInterval(clocktimerID);
  }

  updateClockName() {
    this.setState({
      /* eslint-disable react/no-unused-state */
      clockName: getRandomName(),
    });
  }

  updateClock() {
    this.setState({
      today: new Date(),
    });
    /* eslint-disable no-console */
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  render() {
    return (
      <div className="Clock">
        <>
          <strong className="Clock__name">
            {this.state.clockName}
          </strong>
          {' time is '}
          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </>
      </div>
    );
  }
}
