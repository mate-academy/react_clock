import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './utils/getRandomName';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerName = 0;

  handleLeftKey = (event: MouseEvent) => {
    event.preventDefault();
    if (!this.state.hasClock && event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  handleRightKey = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleClockNameChange = (newName: string) => {
    this.setState({ clockName: newName });
  };

  componentDidMount(): void {
    this.timerName = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('click', this.handleLeftKey);
    document.addEventListener('contextmenu', this.handleRightKey);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerName);

    document.removeEventListener('click', this.handleLeftKey);
    document.removeEventListener('contextmenu', this.handleRightKey);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
