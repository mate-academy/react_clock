/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  handleDocumentClick = () => {
    const today = new Date();

    this.setState({ today });
  };

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
          {' '}
          time is
          {' '}
        </strong>
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
