import React from 'react';
import './clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        date: new Date().toLocaleTimeString()
      }),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  };

  render() {
    const { date } = this.state;
    // eslint-disable-next-line
    console.log(date);
    return (
      <p className="clock">
        <span className="clock__title">Current time:</span>
        {' '}
        <span className="clock__timer">
          {date}
        </span>
      </p>
    )
  };
}