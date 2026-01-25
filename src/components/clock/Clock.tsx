import React from 'react';

type Props = {
  name: string;
};

type StateClock = {
  time: string;
};

export class Clock extends React.Component<Props> {
  state: Readonly<StateClock> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeTimerID = 0;

  componentDidMount(): void {
    this.timeTimerID = window.setInterval(() => {
      const today = new Date();
      const time = today.toUTCString().slice(-12, -4);

      this.setState({ time });
      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeTimerID);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
