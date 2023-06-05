/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string
};

type State = {
  today: Date,
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
    clockName: this.props.name,
  };

  timerId = 0;

  timerIdEverySec = 0;

  componentDidMount(): void {
    this.setState({ today: new Date() });

    this.timerIdEverySec = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.props.name });
    }, 3300);
  }

  componentDidUpdate(_prevProps: Props, prevState: State): void {
    if (this.state.clockName !== prevState.clockName) {
      console.debug(`now: ${this.state.clockName}, prev: ${prevState.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerIdEverySec);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
