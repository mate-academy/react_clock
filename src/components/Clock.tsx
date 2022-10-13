import { Component, ReactNode } from 'react';

type Props = {
  clockName: string,
  hasClock: boolean,
};

type State = {
  today: Date,
  timerId: number,
};

export class Clock extends Component<Props, State> {
  state: State = {
    today: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    this.state.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.today.toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render(): ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
