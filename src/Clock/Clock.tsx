import React from 'react';

interface Props {
  clockName: string;
}

function getCurrentTime(): string {
  const date = new Date().toUTCString().slice(-12, -4);

  return date;
}

export class Clock extends React.Component<Props> {
  state = {
    today: getCurrentTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getCurrentTime() });
      // eslint-disable-next-line no-console
      console.info(getCurrentTime());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
    // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
