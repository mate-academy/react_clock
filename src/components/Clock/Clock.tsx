import React from 'react';

interface State {
  clockName: string;
  currentTime: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

const today = new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    currentTime: today,
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000);
  }

  componentDidUpdate(): void {
    console.debug(this.state.currentTime);
  }

  componentWillUnmount(): void {
    window.clearInterval(window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300));

    window.clearInterval(window.setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
    }, 1000));
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.state.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentTime}
        </span>
      </div>
    );
  }
}
