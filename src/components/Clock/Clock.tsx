import React from 'react';

export class Clock extends React.Component<{ clockName: string }> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timeId);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
