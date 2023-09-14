import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  currentTime: Date,
};

export class Clock extends React.PureComponent<Props, State> {
  state = {
    currentTime: new Date(),
  };

  currentTimerId = 0;

  componentDidMount(): void {
    this.currentTimerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    { clockName }: Readonly<Props>,
    { currentTime }: Readonly<State>,
  ): void {
    if (clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${clockName} to ${this.props.clockName}`);
    }

    if (currentTime !== this.state.currentTime) {
      // eslint-disable-next-line no-console
      console.info(`${this.state.currentTime.toUTCString().slice(-12, -4)}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.currentTimerId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
