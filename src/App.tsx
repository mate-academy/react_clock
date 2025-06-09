import React from 'react';
import { Clock } from 'clock.tsx';
import { getRandomName } from 'getRandomName.ts';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  intervalId: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.intervalId = window.setInterval(() => {
      this.setState(prev => {
        const newName = getRandomName();

        if (prev.clockName !== newName) {
          // eslint-disable-next-line no-console
          console.warn(`Renamed from ${prev.clockName} to ${newName}`);

          return { clockName: newName };
        }

        return prev;
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return <div className="App">{hasClock && <Clock name={clockName} />}</div>;
  }
}
