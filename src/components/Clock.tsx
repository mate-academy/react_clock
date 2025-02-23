import React from 'react';
import { ReactNode } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  nameTimer: number;

  consolTimer: number;

  constructor(props: Props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      time: new Date().toUTCString().slice(-12, -4),
      clockName: props.name,
    };
    this.nameTimer = 0;
    this.consolTimer = 0;
  }

  componentDidMount(): void {
    this.nameTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.consolTimer = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date());
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: State): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `prev: ${prevState.clockName}, new: ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameTimer);
    window.clearInterval(this.consolTimer);
  }

  render(): ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
