import React, { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  private timerId: number | undefined;

  componentDidMount(): void {
    // Початок таймера для оновлення часу
    this.timerId = window.setInterval(this.updateTime, 1000);

    // Додавання слухачів для подій
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    // Очищення таймера та слухачів подій
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  updateTime = () => {
    const newClockName = getRandomName();

    this.setState({
      currentTime: new Date().toUTCString().slice(-12, -4),
      clockName: newClockName,
    });

    // console.log(`Renamed from ${this.state.clockName} to ${newClockName}`);
    // console.log(`Time is ${this.state.currentTime}`);
  };

  toggleClock = () => {
    this.setState(prevState => ({
      hasClock: !prevState.hasClock,
    }));
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { hasClock, clockName, currentTime } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{currentTime}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
