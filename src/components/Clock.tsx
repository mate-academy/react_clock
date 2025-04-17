import React from 'react';

type Props = {
  hasClock: boolean;
  clockName: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: State = {
    time: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (prevState.time !== this.state.time && this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.log(this.state.time.toUTCString().slice(-12, -4));
    }

    if (prevProps.clockName !== this.props.clockName && this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
