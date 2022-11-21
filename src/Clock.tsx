import { Component } from 'react';

interface State {
  currentDate: Date,
}

interface Props {
  clockName: string,
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    currentDate: new Date(),
  };

  clockTimer = 0;

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      this.setState({ currentDate: new Date() });

      // eslint-disable-next-line no-console
      console.info((new Date()).toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimer);
  }

  render() {
    const { currentDate } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
