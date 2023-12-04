import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { AppState, AppProps } from './types/AppTypes';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<AppProps, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      if (this.state.hasClock) {
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
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
