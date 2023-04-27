import React from 'react';

interface ClockState {
  date: string,
}

interface ClockProps {
  clockName: string;
}

function getDate() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = { date: getDate() };

  timerID!: number | null;

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      window.clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      date: getDate(),
    });
    // eslint-disable-next-line no-console
    console.info(this.state.date);
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
