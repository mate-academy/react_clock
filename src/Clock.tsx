import React from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.today.toUTCString().slice(-12, -4)}`);
    }, 1000);
  }

  componentDidUpdate(PrevProps: Props) {
    if (PrevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${PrevProps.clockName} to ${this.props.clockName}`);
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

        {' time is '}

        <span className="Clock__time">
          {`${this.state.today.toUTCString().slice(-12, -4)}`}
        </span>
      </div>
    );
  }
}
