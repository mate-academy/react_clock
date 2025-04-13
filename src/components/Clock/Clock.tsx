import { Component } from 'react';
type Props = {
  name: string;
};
type State = {
  time: string;
};
export class Clock extends Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });

      //eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
