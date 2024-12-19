import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

interface AppState {
  clockName: string;
  currentTime: Date;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, AppState> {
  state: AppState = {
    clockName: 'Clock-0',
    currentTime: new Date(),
    hasClock: true,
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      if (this.state.hasClock) {
        event.preventDefault();
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock ? (
          <Clock clockName={this.state.clockName} />
        ) : null}
      </div>
    );
  }
}
