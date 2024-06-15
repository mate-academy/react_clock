import React from 'react';

type State = {
  // hasClock: boolean;
  clockName: string;
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    // hasClock: false,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId1 = 0;

  timerId2 = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount(): void {
    // This code starts a timer
    this.timerId1 = window.setInterval(() => {
      this.setState(() => {
        return {
          clockName: this.getRandomName(),
        };
      });
    }, 3300);

    this.timerId2 = window.setInterval(() => {
      this.setState(() => {
        return {
          today: new Date(),
        };
      });
    }, 1000);
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentDidUpdate(prevProps: Readonly<State>,
    prevState: Readonly<{}>): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`
      );
    }

    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId1);
    window.clearInterval(this.timerId2);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.state.clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
