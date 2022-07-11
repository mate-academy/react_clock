import { Component } from 'react';

type Props = {
  date: Date,
  clockName: string,
};

export class Clock extends Component<Props, {}> {
  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.props.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date, clockName } = this.props;

    return (
      <div className="clock">
        <strong>{clockName}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
