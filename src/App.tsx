import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('mousedown', this.handleMouseDown);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('mousedown', this.handleMouseDown);
  }

  handleContextMenu = (conextMenuEvent: MouseEvent) => {
    conextMenuEvent.preventDefault();
    this.setState((prevState) => ({
      hasClock: !prevState.hasClock,
      clockName: getRandomName(),
    }));
  };

  handleMouseDown = (mouseDownEvent: MouseEvent) => {
    if (mouseDownEvent.button !== 2) {
      this.setState({
        hasClock: true,
        clockName: getRandomName(),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
