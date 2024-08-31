import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  currentTime: Date;
  hasClock: boolean;
  clockName: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    currentTime: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerToday: number | undefined;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    window.addEventListener('contextmenu', this.handleRightClick);
    window.addEventListener('click', this.handleLeftClick);

    this.timerToday = window.setInterval(() => {
      const oldName = this.state.clockName;
      const newName = getRandomName();

      if (oldName !== newName) {
        this.setState({ clockName: newName });
      }
    }, 3300);
  }

  componentWillUnmount(): void {
    if (this.timerToday) {
      window.clearInterval(this.timerToday);
    }

    window.removeEventListener('contextmenu', this.handleRightClick);
    window.removeEventListener('click', this.handleLeftClick);
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
