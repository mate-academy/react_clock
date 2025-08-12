import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  private nameTimerId: number = 0;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  showClock = () => this.setState({ hasClock: true });

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
