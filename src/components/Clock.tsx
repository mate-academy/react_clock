import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: Date;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    time: new Date(),
  };

  timerId: number = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const time = new Date();

      this.setState({ time });
      // eslint-disable-next-line no-console
      console.log(time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    const timeId = this.timerId;

    window.clearInterval(timeId);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  render() {
    const { name } = this.props;
    const date = this.state.time.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{date}</span>
      </div>
    );
  }
}
