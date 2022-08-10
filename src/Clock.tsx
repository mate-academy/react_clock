import React from 'react';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  clockName: string,
};

export class Clock extends React.Component<{}, State> {
  state = {
    date: new Date(),
    clockName: getRandomName(),
  };

  timerIdDate = 0;

  timerIdName = 0;

  componentDidMount() {
    this.timerIdDate = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
       console.log(this.state.date.toLocaleTimeString());
    }, 1000);

    this.timerIdName = window.setInterval(() => {
      const prevName = this.state.clockName;

      this.setState({
        clockName: getRandomName(),
      });
      // eslint-disable-next-line
    console.log(`Renamed from ${prevName} to ${this.state.clockName}`);
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event?.preventDefault();
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdDate);
    window.clearInterval(this.timerIdName);
  }

  render() {
    const { date, clockName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
