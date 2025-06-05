import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  timerId?: number;

  timer?: number;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState(({ clockName }) => {
        if (newName !== clockName) {
          return { clockName: newName };
        }

        return null;
      });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.rightClick);
    document.removeEventListener('click', this.leftClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
