import React from 'react';
import './App.scss';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerLog = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.timerLog = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ today: newDate });
      // eslint-disable-next-line no-console
      console.log(`${newDate.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const prevName = prevProps.clockName;
    const currentName = this.props.clockName;

    if (currentName !== prevName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerLog);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
