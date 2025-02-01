import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface AppState {
  clockName: string;
  hasClock: boolean;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameChangeTimerId: number = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      if (event.button === 0) {
        this.setState({ hasClock: true });
      }
    });

    this.nameChangeTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', (event: MouseEvent) => {
      if (event.button === 0) {
        this.setState({ hasClock: true });
      }
    });

    window.clearInterval(this.nameChangeTimerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
