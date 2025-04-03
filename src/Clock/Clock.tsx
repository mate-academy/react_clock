import React from 'react';

type State = {
  clockName: string;
  today: string;
};

export class Clock extends React.PureComponent<{}, State> {
  public state: State = {
    clockName: 'Clock-0',
    today: '',
  };

  public timerId1 = 0;

  public timerId2 = 0;

  public getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  public updateToday = () => {
    const data = new Date().toUTCString().slice(-12, -4);

    this.setState({ today: data });
    // eslint-disable-next-line no-console
    console.log(data);
  };

  // This code starts a timer
  componentDidMount(): void {
    this.updateToday();
    this.timerId1 = window.setInterval(() => {
      const newClockName = this.getRandomName();

      if (newClockName !== this.state.clockName) {
        this.setState({ clockName: newClockName });
      }
    }, 3300);
    this.timerId2 = window.setInterval(this.updateToday, 1000);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId1);
    window.clearInterval(this.timerId2);
  }

  componentDidUpdate(
    prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  public render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
