import React, { ReactNode } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Props {
  name: string;
  callback: (value: string) => void;
}

interface State {
  clockName: string;
  today: Date;
}

export class Clock extends React.PureComponent<Props> {
  state: State = {
    clockName: this.props.name,
    today: new Date(),
  };

  timerId = 0;

  timer = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      this.props.callback(this.state.clockName);
    }, 3300);

    this.timer = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
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
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
