import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.hideClock);
    window.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.hideClock);
    window.removeEventListener('click', this.showClock);
  }

  hideClock = (event:MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (<Clock clockName={clockName} />) }

      </div>
    );
  }
}
