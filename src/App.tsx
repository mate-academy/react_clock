/* eslint-disable no-console */
import React from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: false,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  componentDidMount() {
    this.setState({ hasClock: true });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  handleContextMenu: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    this.setState({ hasClock: !this.state.hasClock });
  };

  handleClick = () => {
    this.setState({ hasClock: !this.state.hasClock });
  };

  render() {
    return (
      <div
        className="App"
        onContextMenu={this.handleContextMenu}
        onClick={this.handleClick}
      >
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
