import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: Date;
};

export default class Clock extends Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line no-console
      console.log(date.toUTCString().slice(-12, -4));

      this.setState({ date });
    }, 1000);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
