import { Component } from 'react';

type Props = {
  clock: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.timerFunction, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clock !== prevProps.clock) {
      // eslint-disable-next-line no-console
      console.debug('Renamed from', prevProps.clock, 'to', this.props.clock);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  timerFunction = () => {
    this.setState({ today: new Date() });
    // eslint-disable-next-line no-console
    console.info(this.state.today.toLocaleTimeString());
  };

  render(): JSX.Element {
    const { today } = this.state;
    const { clock } = this.props;
    const time = today.toLocaleTimeString();

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clock}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
