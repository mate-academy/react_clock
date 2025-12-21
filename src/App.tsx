import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  renameClock?: number;

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.renameClock = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextmenu);
  }

  componentWillUnmount(): void {
    if (this.renameClock) {
      window.clearInterval(this.renameClock);
    }

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextmenu);
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
