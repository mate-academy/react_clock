import React from 'react';

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
  hasClock: boolean;
}

const getDate = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<ClockProps, ClockState> {
  private intervalId?: number;

  state: ClockState = {
    time: getDate(),
    hasClock: true,
  };

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        {hasClock && (
          <>
            <strong className="Clock__name">
              { name}
            </strong>
            {}
            <span className="Clock__time">
              {time}
            </span>
          </>
        )}
      </div>
    );
  }
}
