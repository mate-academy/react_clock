import React from 'react';
import './App.scss';
import { Clock } from './components';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

const UPDATE_NAME_INTERVAL: number = 3300;

export class App extends React.Component<State> {
  nameIntervalId: NodeJS.Timeout | null = null;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.onClockHidden);
    document.addEventListener('click', this.onClockVisible);

    this.nameIntervalId = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, UPDATE_NAME_INTERVAL);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.onClockHidden);
    document.removeEventListener('click', this.onClockVisible);

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
    }
  }

  onClockHidden = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  onClockVisible = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  render() {
    const today: Date = new Date();
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} today={today} />}
      </div>
    );
  }
}
