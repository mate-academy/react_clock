import React from 'react';
import './Clock.scss';

type State = {
  date: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock">
        <h1 className="clock__title">React clock</h1>
        <h2 className="clock__name">{this.props.clockName}</h2>
        <p className="clock__time">
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
