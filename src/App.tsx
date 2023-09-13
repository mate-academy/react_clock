import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  showClock: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    showClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ showClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', () => {});
  }

  render() {
    const { clockName, showClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {showClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
