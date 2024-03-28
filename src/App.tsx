import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  private intervalId: NodeJS.Timeout | null = null;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.intervalId = setInterval(() => {
      const newName = this.getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
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
