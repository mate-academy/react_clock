import React from 'react';
type Props = {
  hasClock: boolean;
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props> {
  timerId = 0;

  state: State = {
    today: new Date(),
  };

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    if (!prevProps.hasClock && this.props.hasClock) {
      this.setState({ today: new Date() });
    }
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        if (this.props.hasClock) {
          // eslint-disable-next-line no-console
          console.log(this.state.today.toUTCString().slice(-12, -4));
        }
      });
    }, 1000);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

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
