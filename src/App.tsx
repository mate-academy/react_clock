import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    name: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        name: getRandomName(),
      });
    }, 3300);
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  handleShowClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { name, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={name} />
        )}
      </div>
    );
  }
}
