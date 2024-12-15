import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  clockTicking = 0;

  updateClock = (): void => {
    const newDate = new Date();

    this.setState({ today: newDate });
    // eslint-disable-next-line no-console
    console.log(newDate.toUTCString().slice(-12, -4));
  };

  componentDidMount(): void {
    this.clockTicking = window.setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTicking);
  }

  componentDidUpdate(previous: Readonly<Props>): void {
    if (previous.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${previous.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
