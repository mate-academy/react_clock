import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevprops: Props) {
    const { clockName } = this.props;
    // eslint-disable-next-line no-console

    window.console.debug(`Renamed from ${prevprops.clockName} to ${clockName}`);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const timeString = this.state.date.toLocaleTimeString();
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">{timeString}</span>
      </div>
    );
  }
}
