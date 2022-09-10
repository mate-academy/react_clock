import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(this.generateNewDate, 1000);
  }

  componentDidUpdate(prevName: Props) {
    if (this.props.clockName !== prevName.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  generateNewDate = () => {
    this.setState({ today: new Date() });

    // eslint-disable-next-line no-console
    console.info(this.state.today.toLocaleTimeString());
  };

  render() {
    const { today } = this.state;
    const timeString = today.toLocaleTimeString();

    return (
      <span className="Clock__time">
        {timeString}
      </span>
    );
  }
}
