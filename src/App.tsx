import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hidingClock);

    document.addEventListener('click', this.showingClock);
  }

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    if (this.state.hasClock
      && prevState.clockName !== this.state.clockName
    ) {
      window.console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  hidingClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showingClock = () => {
    this.setState({ hasClock: true });
  };

  commponentWillUnmount() {
    document.removeEventListener('contextmenu', this.hidingClock);
    document.removeEventListener('click', this.showingClock);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock name={clockName} />}
      </div>
    );
  }
}
