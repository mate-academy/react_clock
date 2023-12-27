import { Component } from 'react';

type State = {
  today: Date,

};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerForTime = 0;

  componentDidMount() {
    this.timerForTime = window.setInterval(() => {
      const time = new Date();

      this.setState({ today: time });
      // eslint-disable-next-line no-console
      console.info(time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      window.console.debug(
        `Renamed from ${prevProps.name} to ${name}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerForTime);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
