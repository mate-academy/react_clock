import React from 'react';

interface Props {
  clockName: string;
}

interface ClockState {
  today: Date;
}

export class Clock extends React.Component<Props> {
  state: ClockState = {
    today: new Date(),
  };

  handleTimeUpdate = 0;

  componentDidMount(): void {
    this.handleTimeUpdate = window.setInterval(() => {
      this.setState(() => ({ today: new Date() }));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.handleTimeUpdate);
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
