import React, { ReactNode } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Props {
  name: string;
}

export class Clock extends React.PureComponent<Props> {
  state = {
    clockName: this.props.name,
    today: new Date(),
  };

  timerId = 0;

  timer = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
    window.clearInterval(this.timerId);
  }

  render(): ReactNode {
    return (
      <div
        className="Clock"
      >
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {new Date().toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
