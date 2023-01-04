import { Component, ReactNode } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
  timer: number | null;
};

export class Clock extends Component<Props, State> {
  state: State = {
    today: new Date(),
    timer: null,
  };

  componentDidMount() {
    this.setState({
      timer: window.setInterval(() => {
        this.setState({ today: new Date() });
      }, 1000),
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const { today } = this.state;
    const { clockName } = this.props;

    if (prevState.today !== today) {
/*eslint-disable */
      console.info(today.toUTCString().slice(-12, -4));
    }

    if (prevProps.clockName !== clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
      /* eslint-enable */
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;

    if (timer) {
      window.clearInterval(timer);
    }
  }

  render(): ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
