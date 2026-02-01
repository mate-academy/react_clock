import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  private nameTimerId?: number;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    // Update clock name every 3300ms
    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    // Add event listeners for mouse clicks
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    // Cleanup: clear timer and remove event listeners
    window.clearInterval(this.nameTimerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault(); // Prevent default context menu
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
