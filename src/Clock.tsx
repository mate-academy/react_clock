import { Component } from 'react';

interface State {
  date: Date;
}

interface Props {
  name: string;
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { date } = this.state;
    const { name: clockName } = this.props;

    if (prevState.date !== date) {
      // eslint-disable-next-line no-console
      console.info(date.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name: clockName } = this.props;
    const today = date.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
