import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  timer: string;
};

export class Clock extends Component<Props, State> {
  state: State = {
    timer: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      window.console.log(currentTime);

      this.setState({ timer: currentTime });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { timer } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{timer}</span>
      </div>
    );
  }
}
