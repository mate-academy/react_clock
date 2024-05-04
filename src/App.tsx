import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerClockNameId = 0;

  openClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  closeClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount(): void {
    this.timerClockNameId = window.setInterval(() => {
      const rName = getRandomName();

      this.setState({
        clockName: rName,
      });
    }, 3300);

    document.addEventListener('contextmenu', this.openClock);
    document.addEventListener('click', this.closeClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerClockNameId);

    document.removeEventListener('contextmenu', this.openClock);
    document.removeEventListener('click', this.closeClock);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
