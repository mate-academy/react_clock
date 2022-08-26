import { Component } from 'react';

type State = {
  date: Date;
};
type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps:Props) {
    // eslint-disable-next-line no-console
    console.log(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
