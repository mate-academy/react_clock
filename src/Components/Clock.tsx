import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId2: number = 0;

  componentDidMount(): void {
    this.timerId2 = window.setInterval(() => {
      this.setState(
        {
          time: new Date(),
        },
        () => {
          // eslint-disable-next-line no-console
          console.log(this.state.time.toUTCString().slice(-12, -4));
        },
      );
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId2);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
