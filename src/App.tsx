import { Component, ReactNode } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.removeClock);

    document.documentElement.addEventListener('click', this.addClock);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    document.documentElement.addEventListener('contextmenu', this.removeClock);

    document.documentElement.addEventListener('click', this.addClock);
  }

  removeClock = (e: Event) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  addClock = () => {
    this.setState({ hasClock: true });
  };

  render(): ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
