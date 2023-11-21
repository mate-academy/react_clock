import React from 'react';

interface Props {
  clockName: string,
}

interface ClockState {
  today: Date,
}

export class Clock extends React.PureComponent<Props, ClockState> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.setTime();
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  setTime() {
    return window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
