import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockIsVisible: boolean;
  clockName: string;
};
export class App extends React.Component {
  state: State = {
    clockIsVisible: true,
    clockName: 'Clock-0',
  };

  timerId: number = 0;

  addVisibleClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ clockIsVisible: false });
  };

  removeVisibleClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ clockIsVisible: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.addVisibleClock);
    document.addEventListener('click', this.removeVisibleClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.addVisibleClock);
    document.removeEventListener('click', this.removeVisibleClock);
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: State): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    const { clockIsVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {clockIsVisible && <Clock name={clockName} />}
      </div>
    );
  }
}
