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
    openClock: true,
  };

  timerClockNameId = 0;

  openClockTable = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      openClock: false,
    });
  };

  closeClockTable = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      openClock: true,
    });
  };

  componentDidMount() {
    this.timerClockNameId = window.setInterval(() => {
      const rName = getRandomName();

      this.setState({
        clockName: rName,
      });
    }, 3300);

    document.addEventListener('contextmenu', this.openClockTable);
    document.addEventListener('click', this.closeClockTable);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerClockNameId);

    document.removeEventListener('contextmenu', this.openClockTable);
    document.removeEventListener('click', this.closeClockTable);
  }

  render() {
    const { clockName, openClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {openClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
