import React from 'react';

function currentDate() {
  return new Date().toUTCString().slice(-12, -4);
}

type State = {
  today: string;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: currentDate(),
  };

  timerId: ReturnType<typeof setInterval> | null = null;

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({ today: currentDate() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today);

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
