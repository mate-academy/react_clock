import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  nowDate: Date;
};

function formatTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    nowDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newValue = new Date();

      // eslint-disable-next-line no-console
      console.info(formatTime(newValue));

      this.setState({ nowDate: newValue });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { nowDate } = this.state;
    const formattedTime = formatTime(nowDate);

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">{formattedTime}</span>
      </div>
    );
  }
}
