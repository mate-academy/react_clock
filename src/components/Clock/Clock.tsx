import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ date: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);

    this.setState({ date: '' });
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        <span className="mainClock" data-cy="time">
          {this.state.date}
        </span>
      </>
    );
  }
}
