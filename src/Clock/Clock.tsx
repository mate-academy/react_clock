import React from 'react';

interface Props {
  today: Date,
  clockName: string,
  hasClock: boolean,
}

interface ClockState {
  consoleinfointerval: null | number,
}

export class Clock extends React.PureComponent<Props, ClockState> {
  state = {
    consoleinfointerval: null,
  };

  componentDidMount(): void {
    this.printInfo();
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.state.consoleinfointerval !== null) {
      window.clearInterval(this.state.consoleinfointerval);
      this.setState({ consoleinfointerval: null });
    }
  }

  printInfo() {
    const info = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.info(this.props.today);
    }, 1000);

    this.setState({ consoleinfointerval: info });
  }

  render() {
    const { clockName, today } = this.props;

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
