import { Component, ReactNode } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleTimerOpening);
    document.addEventListener('contextmenu', this.handleTimerClosing);
  }

  componentDidUpdate(_prevProps: never, prevState: State) {
    const { clockName, hasClock } = this.state;

    if (prevState.clockName !== clockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    const { timerId } = this;

    if (timerId !== null) {
      window.clearInterval(timerId);
    }

    document.removeEventListener('click', this.handleTimerOpening);
    document.removeEventListener('contextmenu', this.handleTimerClosing);
  }

  handleTimerOpening = () => {
    this.setState({ hasClock: true });
  };

  handleTimerClosing = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
