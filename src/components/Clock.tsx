import React from 'react';

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

type Props = {
  clockName: string,
};

type State = {
  time: string;
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: getCurrentTime(),
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
        time: getCurrentTime(),
      });
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

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>
        <span>
          {' time is '}
        </span>
        <span className="Clock__time">
          {this.state.time}
        </span>
      </div>
    );
  }
}
