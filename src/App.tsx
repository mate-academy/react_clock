import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
    this.nameIntervalId = window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    if (this.nameIntervalId) {
      window.clearInterval(this.nameIntervalId);
    }
  }

  nameIntervalId: number | undefined;

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  updateClockName = () => {
    const newName = getRandomName();

    this.setState({ clockName: newName });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
