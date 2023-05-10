import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line
      console.info(date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      /* eslint-disable no-console */
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
      /* eslint-enable no-console */
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        <span>{' time is '}</span>
        <span className="Clock__time">{date.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
