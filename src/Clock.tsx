import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  currentName: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { currentName } = this.props;

    if (currentName !== prevProps.currentName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.currentName} to ${currentName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const currentTime = today.toUTCString().slice(-12, -4);

    const { currentName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {currentName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
