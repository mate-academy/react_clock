import React from 'react';

function getCurrentTime(): string {
  const time = new Date();

  return time.toUTCString().slice(-12, -4);
}

type State = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  timeId: number | undefined;

  state: State = {
    time: `${new Date().toUTCString().slice(-12, -4)}`,
  };

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      const time = getCurrentTime();

      // eslint-disable-next-line no-console
      console.log(time);

      this.setState({ time: time });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name } = this.props;
    const clockNameChanged = prevProps.name !== name;

    if (clockNameChanged) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId);
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
