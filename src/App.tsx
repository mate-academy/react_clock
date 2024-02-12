import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleLeftClick);
  }

  // componentDidUpdate(prevState: AppState): void {
  //   const oldName = prevState.clockName;
  //   const currentName = this.state.clockName;

  //   if (oldName !== undefined && currentName !== oldName) {
  //     // eslint-disable-next-line no-console
  //     console.debug(`Renamed from ${oldName} to ${currentName}`);
  //   }
  // }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.stopClock();
  };

  handleLeftClick = () => {
    this.startClock();
  };

  stopClock = (): void => {
    this.setState({ hasClock: false });
  };

  startClock = (): void => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
