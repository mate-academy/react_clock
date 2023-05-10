/* eslint-disable no-console */
import React from 'react';

interface State {
  currentTime: string;
}

interface Props {
  clockName: string;
}

const today = new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: today,
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(): void {
    console.debug(this.state.currentTime);
  }

  componentWillUnmount(): void {
    window.clearInterval(window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000));
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
