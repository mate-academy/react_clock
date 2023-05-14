import React from 'react';

interface ClockProps {
  clockName: string;
}

interface State {
  currentTime: string;
}

function getCurrentTime() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<ClockProps, State> {
  state: Readonly<State> = {
    currentTime: getCurrentTime(),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState({
        currentTime: getCurrentTime(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render(): React.ReactNode {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
