import { Component } from 'react';

import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

interface AppState {
  currentTime: string;
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    currentTime: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
    clockName: 'Clock-0',
  };


  private nameChangeTimerId: number | undefined;

  updateClockName = () => {
    // if (this.state.hasClock) {
      const newClockName = getRandomName();
      this.setState({ clockName: newClockName });
    // }
  };

  componentDidMount() {
    this.nameChangeTimerId = window.setInterval(this.updateClockName, 3300);
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    if (this.nameChangeTimerId) {
      window.clearInterval(this.nameChangeTimerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate({}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
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

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} /> }
      </div>
    );
  }
}

