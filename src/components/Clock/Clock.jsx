import React from 'react';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),

    getInterval() {
      return setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000);
    },
  };

  componentDidMount() {
    this.setState({ date: new Date() });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
    this.interval = this.state.getInterval.call(this);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    const { date } = this.state;

    return (
      <span className="clock">
        {date.toLocaleTimeString()}
      </span>
    );
  }
}
