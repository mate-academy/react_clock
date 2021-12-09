import React from 'react';
import './Clock.scss';

export default class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId?:number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="clock">
        <span className="clock__text">Current time:</span>
        {' '}
        <span className="clock__value">{this.state.date}</span>
      </div>
    );
  }
}
