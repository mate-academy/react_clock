import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <>
        <strong className="clock__name">{clockName}</strong>

        <span className="clock__span">
          time is
        </span>

        <div className="clock__time">
          {date.toLocaleTimeString()}
        </div>
      </>
    );
  }
}
