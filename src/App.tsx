import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component <{}, AppState > {
  clockNameTimerId: number | undefined;

  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    if (this.clockNameTimerId) {
      window.clearInterval(this.clockNameTimerId);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        { hasClock && (
          <>
            <h1>React clock</h1>
            <Clock clockName={clockName} />
          </>
        )}
      </div>
    );
  }
}
