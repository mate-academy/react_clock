import React from 'react';

/* function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
} */

export class Clock extends React.Component {
  timerId = 0;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        time: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
    /* this.timerId = window.setInterval(() => {
      this.clockName = getRandomName();
    }, 3300); */
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">hello</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
