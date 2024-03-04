import React from 'react';

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  changeClockStatus: (event: MouseEvent) => void;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
    clockName: getRandomName(),
  };

  timerId = 0;

  timerId2 = 0;

  changeClockStatus = this.props.changeClockStatus;

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    this.timerId2 = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
      this.setState({ today: new Date() });
    }, 1000);
    document.addEventListener('contextmenu', this.changeClockStatus);
    document.removeEventListener('click', this.changeClockStatus);
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
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
