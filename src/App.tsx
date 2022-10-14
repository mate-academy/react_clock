import { Component } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.removeClock);
    document.addEventListener('click', this.addClock);

    this.timerId = window.setInterval(this.setNewClockName, 3300);
  }

  componentDidUpdate(_: never, prevState: State) {
    const { clockName, hasClock } = this.state;
    const { clockName: prevClockName } = prevState;

    if (clockName !== prevClockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.removeClock);
    document.removeEventListener('click', this.addClock);
    window.clearInterval(this.timerId);
  }

  removeClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  addClock = () => {
    this.setState({ hasClock: true });
  };

  setNewClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock clockName={clockName} hasClock={hasClock} />}
      </div>
    );
  }
}
