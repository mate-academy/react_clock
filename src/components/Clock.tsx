import React from 'react';

type ClockState = {
  currentTime: Date;
};

interface ClockProps {
  name: string;
}

export class Clock extends React.Component< ClockProps, ClockState> {
  state = {
    currentTime: new Date(),
  };

  timerCurrentTimeId = 0;

  componentDidMount() {
    this.timerCurrentTimeId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerCurrentTimeId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
