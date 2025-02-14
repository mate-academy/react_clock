import React from 'react';

type ClockProps = {
  clockName: string;
};

type State = {
  clock: string;
};

export class Clock extends React.Component<ClockProps> {
  state: State = {
    clock: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clock: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(
    prevProps: Readonly<ClockProps>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clock !== this.state.clock) {
      // eslint-disable-next-line no-console
      console.log(this.state.clock);
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.clock}</span>
      </div>
    );
  }
}
