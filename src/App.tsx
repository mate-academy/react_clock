import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  currentClockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    currentClockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentClockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.rightButtonClick);
    window.addEventListener('click', this.leftButtonClick);
  }

  rightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftButtonClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, currentClockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={currentClockName} />}
      </div>
    );
  }
}

