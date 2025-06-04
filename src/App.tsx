import React from 'react';
import { Clock } from './Clock';

const getRandomName = () => `Clock-${Math.floor(Math.random() * 1000)}`;

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  renameIntervalId: number | undefined;

  componentDidMount() {
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);

    this.renameIntervalId = window.setInterval(this.renameClock, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);

    if (this.renameIntervalId) {
      clearInterval(this.renameIntervalId);
    }
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  renameClock = () => {
    const newName = getRandomName();
    this.setState({ clockName: newName });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return <div className="App">{hasClock && <Clock name={clockName} />}</div>;
  }
}
