import React from 'react';

function getTime(): string {
  const today = new Date();

  return today.toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: getTime(),
  };

  timeUpdateTimerId = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.timeUpdateTimerId = window.setInterval(() => {
      this.setState({ time: getTime() });
      // eslint-disable-next-line no-console
      console.log(getTime());
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timeUpdateTimerId);
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
