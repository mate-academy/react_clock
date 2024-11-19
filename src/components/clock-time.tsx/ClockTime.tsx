import { Component } from 'react'

type State = {
  today: Date;
};

export default class ClockTime extends Component {
  state: State = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today:  new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate({}, prevState: State): void {
    if (
      prevState.today !== this.state.today
    ) {
      // eslint-disable-next-line no-console
      console.log(
        `${this.state.today.toUTCString().slice(-12, -4)}`,
      );
    }
  }

  render() {
    return (
      <span className="Clock__time">
        {this.state.today.toUTCString().slice(-12, -4)}
      </span>
    )
  }
}

