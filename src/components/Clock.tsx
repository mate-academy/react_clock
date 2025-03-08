/* eslint-disable no-console */
import React from 'react';

export class Clock extends React.Component<{ name: string }> {
  state = {
    today: new Date(),
    clockName: this.props.name,
  };

  currentTime = this.state.clockName;

  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        console.log(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      this.setState({ clockName: this.props.name }, () => {
        console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
