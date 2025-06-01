// App.tsx
import React, { Component } from 'react';
import './App.scss';
import Clock from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  private nameInterval: NodeJS.Timeout | null = null;

  private previousName: string = 'Clock-0';

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    // Start name timer - this runs regardless of clock visibility
    this.startNameTimer();

    // Add event listeners
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    // Clean up timers and event listeners
    this.stopNameTimer();
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(prevProps: {}, prevState: AppState) {
    // Handle name changes
    if (prevState.clockName !== this.state.clockName) {
      // Store the old name before updating previousName
      const oldName = this.previousName;

      // Always update previousName first
      this.previousName = this.state.clockName;

      // Print rename message only when clock is visible
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${oldName} to ${this.state.clockName}`);
      }
    }
  }

  startNameTimer = () => {
    if (this.nameInterval) {
      return;
    } // Already running

    this.nameInterval = setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);
  };

  stopNameTimer = () => {
    if (this.nameInterval) {
      clearInterval(this.nameInterval);
      this.nameInterval = null;
    }
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.hasClock ? (
          <Clock name={this.state.clockName} />
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              color: '#666',
              fontSize: '14px',
            }}
          >
            Clique esquerdo para mostrar o relógio
          </div>
        )}
      </div>
    );
  }
}
