/* eslint-disable no-console */
import React from 'react';

type State = {
  date: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    console.log(this.state.date.toLocaleTimeString());

    if (prevProps.clockName !== this.props.clockName) {
      console.log(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="clock">
        <strong>{clockName}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
