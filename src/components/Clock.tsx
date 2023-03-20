import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({
        time: date,
      });
      // eslint-disable-next-line
      window.console.info(date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // componentDidUpdate({ clockName }: Readonly<Props>) {
  //   if (clockName !== this.props.clockName) {
  //     // eslint-disable-next-line
  //     console.debug(`Renamed from ${clockName} to ${this.props.clockName}`);
  //   }
  // }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      window.console.debug(`Renamed from Clock-${prevProps.clockName} to Clock-${clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {`Clock-${this.props.clockName || '0'}`}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
