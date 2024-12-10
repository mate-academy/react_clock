import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppState = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<AppState> {
  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleRightMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightMouseClick);
    document.addEventListener('click', this.handleLeftMouseClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightMouseClick);
    document.removeEventListener('click', this.handleLeftMouseClick);
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
