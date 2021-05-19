import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
    timer: null,
  }

  componentDidMount() {
    this.state.timer = setInterval(() => {
      this.setState({ date: new Date() });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock">
        <h1 className="clock__title">
          React clock
        </h1>
        <p className="clock__time">
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
