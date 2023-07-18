/* eslint-disable no-console */
import React from 'react';

interface Props {
  clockName: string,
}

export class Clock extends React.Component<Props> {
  state = {
    today: new Date(),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.createInterval, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  createInterval = () => {
    this.setState({ today: new Date() });

    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render(): React.ReactNode {
    const { today } = this.state;
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
