import React from 'react';

type ClockProps = {
  name: string;
};

export class Clock extends React.Component<ClockProps, { time: Date }> {
  private timerId: number | null = null;

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({ time: currentTime });

      const timeString = currentTime.toISOString().slice(11, 19);

      // eslint-disable-next-line no-console
      console.log(timeString);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          <p>{this.state.time.toUTCString().slice(-12, -4)}</p>
        </span>
      </div>
    );
  }
}
