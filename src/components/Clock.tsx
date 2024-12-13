import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  time: Date;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  private timerId: number | null = null;

  state: ClockState = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });

      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
