import { Component } from 'react';

type State = {
  date: Date,
  timerClockChange: number,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
    timerClockChange: 0,
  };

  componentDidMount() {
    this.state.timerClockChange = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString('en-US'));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerClockChange);
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
