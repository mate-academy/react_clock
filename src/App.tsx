import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State & { hasClock: boolean } = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number = 0;

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
