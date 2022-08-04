import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerIdRename = 0;

  componentDidMount() {
    this.timerIdRename = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentDidUpdate(...args: [{}, State]) {
    const { clockName: prevName } = args[1];
    const { clockName: curName } = this.state;

    if (prevName !== curName) {
      // eslint-disable-next-line
      console.log(`Renamed from ${prevName} to ${curName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdRename);
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
  }

  handleHideClock = () => {
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleShowClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
