import React from 'react';

type State = {
  today: string;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId?: number;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.today);
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    return <span className="Clock__time">{this.state.today}</span>;
  }
}
