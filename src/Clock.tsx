import { Component } from 'react';

interface Props {
  clockName: string,
}

type State = {
  today: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  clockTimer = 0;

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      this.setState({ today });

      // eslint-disable-next-line no-console
      console.info(today);
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
    const { today } = this.state;
    const { clockName } = this.props;

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
