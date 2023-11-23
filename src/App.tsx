import React from 'react';
import { Clock } from './Clock';

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined = undefined;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.timerId = setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300) as unknown as number;
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu',
      this.hideClock);
    document.removeEventListener('click', this.showClock);
    clearInterval(this.timerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

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
