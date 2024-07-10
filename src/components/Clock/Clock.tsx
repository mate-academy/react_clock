import React from 'react';

function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type ClockProps = {
  name: string;
};

type ClockState = {
  currentTime: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    currentTime: getCurrentTime(),
  };

  changeCurrentTime = () => {
    const newTime = getCurrentTime();

    this.setState({ currentTime: newTime });

    // eslint-disable-next-line no-console
    console.log(newTime);
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.changeCurrentTime, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
