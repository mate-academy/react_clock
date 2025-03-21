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

  timerId: number = 0;
  isMounted = false;

  componentDidMount(): void {
    this.isMounted = true;
    this.timerId = window.setInterval(() => {
      if (this.isMounted) {
        this.setState({ today: currentDate() });
      }
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    this.isMounted = false;
    window.clearInterval(this.timerId);
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
