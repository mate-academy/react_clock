import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextmenu);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextmenu);
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
