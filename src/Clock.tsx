import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  now: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    now: new Date(),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState({ now: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { now: today } = this.state;
    const { clockName } = this.props;

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
