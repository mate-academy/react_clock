import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasChild: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasChild: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleLeftClick);

    document.addEventListener('click', this.handleRightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleLeftClick);
    document.removeEventListener('click', this.handleRightClick);
    clearInterval(this.timerId);
  }

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasChild: false });
  };

  handleRightClick = (event: MouseEvent) => {
    if (event) {
      this.setState({ hasChild: true });
    }
  };

  render() {
    const { clockName, hasChild } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasChild && <Clock name={clockName} /> }
      </div>
    );
  }
}
