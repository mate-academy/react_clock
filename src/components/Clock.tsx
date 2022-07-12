import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerClockChange = 0;

  componentDidMount() {
    this.timerClockChange = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerClockChange);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <strong>{this.props.clockName}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </>
    );
  }
}
