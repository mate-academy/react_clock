import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockTimerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.hasShowClock);

    this.clockTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);

    document.addEventListener('click', this.hasShowClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  hasShowClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
