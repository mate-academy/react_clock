import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private renameTimerId?: number;

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  private handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.renameTimerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    if (this.renameTimerId !== undefined) {
      window.clearInterval(this.renameTimerId);
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
