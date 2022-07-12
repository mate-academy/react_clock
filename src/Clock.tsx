/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  timerId?: number;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    console.log(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
  }

  componentWillUnmount() {
    console.log('timer was removed', this.timerId);
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;
    const timeString = date.toLocaleTimeString();

    return (
      <div>
        <strong>{clockName}</strong>
        {' time is '}
        {timeString}
      </div>
    );
  }
}
