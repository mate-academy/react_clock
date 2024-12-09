import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  timerId = 0;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  onRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  onLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  addListener = () => {
    document.addEventListener('contextmenu', this.onRightClick);
    document.addEventListener('click', this.onLeftClick);
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.addListener();
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    this.addListener();
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
