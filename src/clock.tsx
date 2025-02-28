import React from 'react';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

const defaultDelayTime = 1000;

type ClockProps = {
  onNotActive: (event: MouseEvent) => void;
  clockName: string;
};

type ClockState = {
  today: Date;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.props.onNotActive);

    this.timerId = window.setInterval(() => {
      // eslint-disable-next-line
      this.setState({ today: new Date() });
    }, defaultDelayTime);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.props.onNotActive);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    // eslint-disable-next-line
    console.log(this.state.today.toUTCString().slice(-12, -4));

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
