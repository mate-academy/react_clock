import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface IAppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, IAppState> {
  state: Readonly<IAppState> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  intervalNameId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.intervalNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: Readonly<IAppState>) {
    if ((prevState.clockName !== this.state.clockName) && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.intervalNameId);
  }

  handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
