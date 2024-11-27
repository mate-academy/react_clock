import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

function getTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

export class Clock extends React.Component<Props, State> {
  public readonly state: State = {
    today: new Date(),
  };

  timerIdDate = 0;

  timerIdTime = 0;

  handleTimer() {
    this.timerIdDate = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  handleClearTimer() {
    window.clearInterval(this.timerIdDate);
  }

  handleLogTime() {
    this.timerIdTime = window.setInterval(() => {
      getTime();
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentDidMount(): void {
    this.handleTimer();
    this.handleLogTime();
  }

  componentWillUnmount(): void {
    this.handleClearTimer();
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
