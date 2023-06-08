import { Component } from 'react';
// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

interface State {
  today: Date;
  clockName: string;
}

export class Clock extends Component<{}, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  render() {
    const { today, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

// const today = new Date();
// let clockName = 'Clock-0';

// // This code starts a timer
// const timerId = window.setInterval(() => {
//   clockName = getRandomName();
// }, 3300);

// // this code stops the timer
// window.clearInterval(timerId);
