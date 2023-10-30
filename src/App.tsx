import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string
  hasClock: boolean
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleMouseRClick);
    document.addEventListener('click', this.handleMouseLClick);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleMouseRClick);
    document.removeEventListener('click', this.handleMouseLClick);
    window.clearInterval(this.timerId);
  }

  handleMouseLClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleMouseRClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
        && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
