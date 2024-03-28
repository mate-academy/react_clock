/* eslint-disable no-console */
import React from 'react';

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps> {
  state = {
    time: new Date(),
  };

  intervalId = 0;

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      const currentTime = new Date();

      //eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));

      this.setState({ currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
