import React from 'react';

interface State {
  currentTime: string,
  clockName: string,
}

export class Clock extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerID: NodeJS.Timeout | null = null;

  nameTimerID: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateTime(), 1000,
    );

    this.nameTimerID = setInterval(
      () => this.updateName(), 3300,
    );
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }

    if (this.nameTimerID) {
      clearInterval(this.nameTimerID);
    }
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock ${value}`;
  };

  updateTime() {
    this.setState(
      {
        currentTime: new Date().toUTCString().slice(-12, -4),
      },
    );
  }

  updateName() {
    this.setState(
      {
        clockName: this.getRandomName(),
      },
    );
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {this.state.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.currentTime}
          </span>
        </div>
      </div>
    );
  }
}
