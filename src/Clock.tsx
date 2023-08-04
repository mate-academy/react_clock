import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  realTime: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    realTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ realTime: new Date() });
      // eslint-disable-next-line
      console.info(this.state.realTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      window.console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { realTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {realTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
