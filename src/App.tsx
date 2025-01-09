import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      if (this.state.hasClock) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
