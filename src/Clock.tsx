/* eslint-disable no-console */
import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  date: string;
}

const today = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state = {
    date: today(),
  };

  timerId!: number | null;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const date = today();

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
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

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
