/* eslint-disable no-console */
import React from 'react';

interface State {
  currentTime: string;
  clockTimer: number;
}

interface Props {
  clockName: string;
}

const today = new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: today,
    clockTimer: 0,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
      console.info(this.state.currentTime);
    }, 1000);

    this.setState({
      clockTimer: timerId,
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.clockTimer);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime}
        </span>
      </div>
    );
  }
}
