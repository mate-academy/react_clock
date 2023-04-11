/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: string;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date().toUTCString().slice(-12, -4),
  };

  dateTimer = 0;

  componentDidMount() {
    this.dateTimer = window.setInterval(() => {
      const date = new Date().toUTCString().slice(-12, -4);

      this.setState({ date });

      console.info(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.dateTimer);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
