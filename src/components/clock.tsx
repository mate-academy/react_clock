import React from 'react';

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newToday = new Date();

      this.setState({ today: newToday });
      // eslint-disable-next-line no-console
      console.log(`${newToday.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{`${clockName}`}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
