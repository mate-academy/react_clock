import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerlog = 0;

  // This code starts a timer
  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerlog = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', this.handleLeftClick);
  }
  // this code stops the timer

  componentWillUnmount() {
    window.clearTimeout(this.timerlog);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
