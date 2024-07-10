import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleClockAppear = () => {
    this.setState({ hasClock: true });
  };

  handleClockDisappear = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleClockAppear);

    document.addEventListener('contextmenu', this.handleClockDisappear);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClockAppear);

    document.removeEventListener('contextmenu', this.handleClockDisappear);

    window.clearInterval(this.timerId);
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
