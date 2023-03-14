/* eslint-disable no-console */
import { Component } from 'react';

function timeFormat(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(timeFormat(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProp: Props) {
    const { clockName } = this.props;

    if (prevProp.clockName !== clockName) {
      console.debug(`Renamed from ${prevProp.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
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
          {timeFormat(today)}
        </span>
      </div>
    );
  }
}
