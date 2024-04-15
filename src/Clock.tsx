import React from 'react';

import './App.scss';

interface Props {
  today: Date;
  clockName: string;
}

interface State {
  time: Date;
}

export class Clock extends React.Component<Props, State> {
  timeTimerID: NodeJS.Timeout | null = null;

  state: State = {
    time: new Date(),
  };

  componentDidMount() {
    if (!this.timeTimerID) {
      this.timeTimerID = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    if (this.timeTimerID) {
      clearInterval(this.timeTimerID);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  tick() {
    const currentTime = new Date();

    this.setState({
      time: currentTime,
    });
    // eslint-disable-next-line no-console
    console.log(currentTime.toUTCString().slice(-12, -4));
  }

  render() {
    const { clockName } = this.props;

    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
