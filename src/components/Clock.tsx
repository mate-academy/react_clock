/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  date: string;
};

const getDate = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends Component<Props, State> {
  state = {
    date: getDate(),
  };

  dateTimerId: number | null = null;

  componentDidMount() {
    this.dateTimerId = window.setInterval(() => {
      const date = getDate();

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
    if (this.dateTimerId) {
      window.clearInterval(this.dateTimerId);
    }
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
