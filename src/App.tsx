import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
    window.clearInterval(this.timerId);
  }

  handleHideClock = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleShowClock = (): void => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { hasClock } = this.state;
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
