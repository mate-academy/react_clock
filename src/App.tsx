import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

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

    document.addEventListener('contextmenu', e => this.hideClockHandler(e));
    document.addEventListener('click', this.showClockHandler);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ) {
    const { clockName } = this.state;

    if (clockName !== prevState.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClockHandler);
    document.removeEventListener('click', this.showClockHandler);

    clearInterval(this.timerId);
  }

  hideClockHandler = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
    clearInterval(this.timerId);
  };

  showClockHandler = () => {
    this.setState({ hasClock: true });
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

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
