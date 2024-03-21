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
  timerId = 0;

  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateClockName, 3300);
    document.addEventListener('click', this.turnOnHasClock);
    document.addEventListener('contextmenu', this.turnOffHasClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.turnOnHasClock);
    document.removeEventListener('contextmenu', this.turnOffHasClock);
  }

  updateClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  turnOnHasClock = () => this.setState({ hasClock: true });

  turnOffHasClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
