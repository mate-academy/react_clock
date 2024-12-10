import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State2 = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State2> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId2 = 0;

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);

    this.timerId2 = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId2);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
