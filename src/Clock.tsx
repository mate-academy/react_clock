/* eslint-disable no-console */
import React from 'react';

type GetRandomName = () => string;

type Props = {
  today: Date;
  clockName: string;
  getRandomName: GetRandomName;
};

type State = {
  clockName: string;
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: this.props.today,
    clockName: this.props.clockName,
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.props.getRandomName() });
    }, 3300);

    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
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
