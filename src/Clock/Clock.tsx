import React from 'react';
import './Clock.scss';

interface State {
  time: string;
}

export class Clock extends React.Component<{}, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);

    // eslint-disable-next-line
    console.log(this.timerId);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;

    return (
      <p className="time">
        { time }
      </p>
    );
  }
}
