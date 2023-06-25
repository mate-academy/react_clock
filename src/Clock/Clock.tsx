import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdEverySec = 0;

  componentDidMount() {
    this.setState({ today: new Date() });

    this.timerIdEverySec = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`now: ${this.props.name}, prev: ${prevProps.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdEverySec);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
