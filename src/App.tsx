import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
  today: Date;
  timerId: number;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
    timerId: 0,
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    const timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState(prevState => {
        if (newName !== prevState.clockName) {
          return { clockName: newName };
        }

        return null;
      });
    }, 3300);

    this.setState({ timerId });

    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && prevState.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock key={this.state.clockName} name={this.state.clockName} />
        )}
      </div>
    );
  }
}
