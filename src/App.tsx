import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    window.setInterval(this.handleClockName, 3300);
    document.addEventListener('contextmenu', this.handleContextClick);
    document.addEventListener('click', this.handleClick);
  }

  handleClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleContextClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

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
