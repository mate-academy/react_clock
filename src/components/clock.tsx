import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date().toUTCString().slice(-12, -4),
  };

  timerSecondsId = 0;

  componentDidMount(): void {
    this.timerSecondsId = window.setInterval(() => {
      this.setState({ date: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    if (prevState.date !== this.state.date) {
      // eslint-disable-next-line no-console
      console.info(this.state.date);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerSecondsId);
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
          {this.state.date}
        </span>
      </div>
    );
  }
}
