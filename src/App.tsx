import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

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

  openClock = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  closeClock = (e: MouseEvent) => {
    e.preventDefault();
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
    return (
      <div className="App">
        {this.state.hasClock ? (
          <>
            <h1>React clock</h1>
            <Clock clockName={this.state.clockName} />
          </>
        ) : (
          <h1>React clock</h1>
        )}
      </div>
    );
  }
}
