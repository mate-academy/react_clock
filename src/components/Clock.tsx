import React from 'react';

type Props = {
  clockName: string,
  hasClock: boolean,
};

type State = {
  date: Date
};

export class Clock extends React.PureComponent<Props, State> {
  currentDate = new Date();

  timerId = 0;

  state: State = {
    date: this.currentDate,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.currentDate = new Date();
      // eslint-disable-next-line no-console
      console.info(this.currentDate.toUTCString().slice(-12, -4));
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.hasClock && prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
