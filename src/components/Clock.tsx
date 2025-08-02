import React from 'react';

type Props = {
  clockName: string;
  hasClock: (newClockName: string) => void;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerUpdateId = 0;

  nameChangeId = 0;

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  componentDidMount(): void {
    this.timerUpdateId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.nameChangeId = window.setInterval(() => {
      this.props.hasClock(this.getRandomName());
    }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    if (this.timerUpdateId) {
      window.clearInterval(this.timerUpdateId);
    }

    if (this.nameChangeId) {
      window.clearInterval(this.nameChangeId);
    }
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
