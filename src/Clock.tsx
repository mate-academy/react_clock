import { Component } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends Component {
  state = {
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId2 = 0;

  timerId = 0;

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    this.timerId2 = window.setInterval(() => {
      const newClockName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);
      this.setState({ clockName: newClockName });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerId2);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
