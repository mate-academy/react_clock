import React from 'react';

const getDate = () => new Date().toUTCString().slice(-12, -4);

interface State {
  time: string,
}

interface ClockProps {
  clockName: string,
}

export class Clock extends React.Component<ClockProps, State> {
  state = {
    time: getDate(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: getDate() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.time}`);
    }, 1000);
  }

  componentDidUpdate(previous: ClockProps) {
    if (previous.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${previous.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
