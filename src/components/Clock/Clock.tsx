import React from 'react';

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  changeClockName: (newName: string) => void;
  changeClockStatus: (event: MouseEvent) => void;
  currentClockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
    clockName: this.props.currentClockName,
  };

  timerId = 0;
  timerId2 = 0;

  changeClockStatus = this.props.changeClockStatus;

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() }, () => {
        this.props.changeClockName(this.state.clockName);
      });
    }, 3300);
    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date(this.state.today.getTime() + 1000) }, () => {
          // eslint-disable-next-line no-console
          console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
    document.addEventListener('contextmenu', this.changeClockStatus);
    document.removeEventListener('click', this.changeClockStatus);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<{ clockName: string }>,
  ): void {
    if (prevState.clockName !== this.state.clockName && prevProps) {
      // this.props.changeClockName(this.state.clockName);
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerId2);
    document.addEventListener('click', this.changeClockStatus);
    document.removeEventListener('contextmenu', this.changeClockStatus);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.currentClockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
