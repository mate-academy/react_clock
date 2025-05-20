import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId?: number;

  timeUpdatedInterval?: number;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timeUpdatedInterval = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('contextmenu', this.handleRightClock);
    document.addEventListener('click', this.handleLeftClick);
  }

  handleRightClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    if (this.timeUpdatedInterval) {
      clearInterval(this.timeUpdatedInterval);
    }

    document.removeEventListener('contextmenu', this.handleRightClock);
    document.removeEventListener('click', this.handleLeftClick);

    //console.log('Clock component unmounted');
  }

  // This code starts a timer

  // this code stops the timer

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
