import React from 'react';
import './App.scss';
import { Clock } from './components/Clocks';

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

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      openClock: false,
    });
  };

  handleLeftClick = (event: MouseEvent) => {
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

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerClockNameId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
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
