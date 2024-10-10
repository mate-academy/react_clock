/* eslint-disable no-console */
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

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleRightClickEvent = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClickEvent = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClickEvent);
    document.addEventListener('click', this.handleLeftClickEvent);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClickEvent);
    document.removeEventListener('click', this.handleLeftClickEvent);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>{' '}
        {this.state.hasClock && (
          <Clock name={this.state.clockName} hasClock={this.state.hasClock} />
        )}
      </div>
    );
  }
}
