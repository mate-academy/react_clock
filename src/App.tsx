import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
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

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClockComponent);
    document.addEventListener('click', this.showClockComponent);
    this.startClockRenaming();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClockComponent);
    document.removeEventListener('click', this.showClockComponent);
  }

  startClockRenaming = () => {
    setInterval(() => {
      this.setState(prevState => {
        const newClockName = getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newClockName}`);

        return { clockName: newClockName };
      });
    }, 3300);
  };

  hideClockComponent = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClockComponent = () => {
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
