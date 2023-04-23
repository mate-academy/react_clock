import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId!: number | null;

  componentDidMount() {
    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.rightClick);
    document.removeEventListener('click', this.leftClick);

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  rightClick = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
