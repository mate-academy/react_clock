import React from 'react';

interface ClockProps {
  clockName: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timeIntervalId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    if (this.timeIntervalId) clearInterval(this.timeIntervalId);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  updateTime() {
    this.timeIntervalId = setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({
        today: newDate,
      });

      // eslint-disable-next-line no-console
      console.log(newDate);
    }, 1000);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
