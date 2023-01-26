import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};
// eslint-disable-next-line
export class Clock extends Component<Props, State> {
  intervalId = 0;

  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      const now = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: now });
      // eslint-disable-next-line
      console.info(now)
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
