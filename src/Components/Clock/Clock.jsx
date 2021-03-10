import React from 'react';

export class Clock extends React.Component {
  state = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();

      this.setState({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const normalizeValue = num => ((num > 9) ? `${num}` : `0${num}`);

    return (
      <strong>
        <span>{normalizeValue(hours)}</span>
        {' : '}
        <span>{normalizeValue(minutes)}</span>
        {' : '}
        <span>{normalizeValue(seconds)}</span>
      </strong>
    );
  }
}
