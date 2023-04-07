import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  clockName: string;
  hasClock: boolean;
  nameTimer?: number;
}

export class App extends React.Component {
  state: Readonly<AppState> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    const handleClockName = () => {
      this.setState((state: AppState): AppState => {
        return { ...state, clockName: getRandomName() };
      });
    };

    this.setState((state: AppState) => ({
      ...state,
      nameTimer: window.setInterval(handleClockName, 3300),
    }));

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_: unknown, prevState: AppState) {
    const isUpdatedClockName = prevState.clockName !== this.state.clockName;

    if (isUpdatedClockName && this.state.hasClock) {
      const message = `Renamed from ${prevState.clockName} to ${this.state.clockName}`;

      // eslint-disable-next-line no-console
      console.debug(message);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.state.nameTimer);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: Event) => {
    event.preventDefault();

    this.setState((state: AppState) => ({
      ...state,
      hasClock: false,
    }));
  };

  handleLeftClick = (event: Event) => {
    event.preventDefault();

    this.setState((state: AppState) => ({
      ...state,
      hasClock: true,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
