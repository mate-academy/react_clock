import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: this.getCurrentTime(),
  };

  timerId = 0;

  getCurrentTime(): string {
    return new Date().toUTCString().slice(-12, -4);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const now = this.getCurrentTime();

      this.setState({
        time: now,
      });

      // eslint-disable-next-line no-console
      console.log(now);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
