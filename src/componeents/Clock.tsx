import React from 'react';

interface ClockState {
  currentTime: string,
}
interface ClockProps {
  clockName: string,
}

function getCurrentDate() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    currentTime: getCurrentDate(),
  };

  secondTimerId = 0;

  componentDidMount() {
    this.secondTimerId = window.setInterval(() => {
      this.setState({
        currentTime: getCurrentDate(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(lastProps: Readonly<ClockProps>) {
    if (lastProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${lastProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.secondTimerId);
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
