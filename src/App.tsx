import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
    clearInterval(this.timerId);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  rightClick = (contextmenu: Event) => {
    this.setState({ hasClock: false });
    contextmenu.preventDefault();
  };

  render(): React.ReactNode {
    return this.state.hasClock
      ? (
        <div className="App">
          <Clock clockName={this.state.clockName} />
        </div>
      ) : (
        <div className="App">
          nothing
        </div>
      );
  }
}
