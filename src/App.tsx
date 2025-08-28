import React from 'react';
import './App.scss';

import { Clock } from './Clock';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  private timerId: ReturnType<typeof setInterval> | null = null;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  private handleDocumentClick = () => {
    this.setState((prevState: State) => ({
      ...prevState,
      clockName: getRandomName(),
      hasClock: true,
    }));
  };

  private handleDocumentContextMenu = (_e: MouseEvent) => {
    _e.preventDefault();
    this.setState((prevState: State) => ({
      ...prevState,
      hasClock: false,
    }));
  };

  componentDidMount() {
    // This code starts a timer
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);

    this.timerId = window.setInterval(() => {
      this.setState(prevState => ({
        ...prevState,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
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
