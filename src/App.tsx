import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(currstate => {
      if (currstate.hasClock) {
        return { hasClock: false };
      }

      return null;
    });
  };

  handleLeftClick = () => {
    this.setState(currstate => {
      if (!currstate.hasClock) {
        return { hasClock: true };
      }

      return null;
    });
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    if (this.state.hasClock) {
      this.timerId = window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    const hasClock = this.state.hasClock;
    const clockName = this.state.clockName;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
