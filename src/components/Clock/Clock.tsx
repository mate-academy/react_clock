import React from 'react';

type ClockProps = {
  clockName: string;
};

type ClockState = {
  currentTime: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  currentTimeId = 0;

  clockNameId = 0;

  componentDidMount(): void {
    this.currentTimeId = window.setInterval(() => {
      this.setState(
        { currentTime: new Date().toUTCString().slice(-12, -4) },
        () => {
          // eslint-disable-next-line no-console
          console.log(this.state.currentTime);
        },
      );
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.currentTimeId);
  }

  render() {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
