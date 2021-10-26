import React from 'react';

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
        <span>Current time:</span>
        {' '}
        <span>{this.state.date}</span>
      </div>
    );
  }
}
