import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.rightClick);
    window.addEventListener('click', this.leftClick);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    window.removeEventListener('contextmenu', this.rightClick);
    window.removeEventListener('click', this.leftClick);
  }

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
