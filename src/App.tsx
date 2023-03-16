import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameChangeTimerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleLeftMouseClick);
    document.addEventListener('contextmenu', this.handleRightMouseClick);

    this.clockNameChangeTimerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (
      this.state.hasClock
      && this.state.clockName !== prevState.clockName
    ) {
      window.console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftMouseClick);
    document.removeEventListener('contextmenu', this.handleRightMouseClick);

    window.clearInterval(this.clockNameChangeTimerId);
  }

  handleLeftMouseClick = (): void => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleRightMouseClick = (event: Event): void => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

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
