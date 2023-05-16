import { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => this.rename(), 3300);
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: Event) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  showClock = (event: Event) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  rename() {
    this.setState({
      clockName: getRandomName(),
    });
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div>
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
