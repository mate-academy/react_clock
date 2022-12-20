import { Component } from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdClock = 0;

  componentDidMount() {
    this.timerIdClock = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHiddenClock);
    document.addEventListener('click', this.handleClockAppearance);
  }

  componentWillUnmount() {
    clearInterval(this.timerIdClock);
    document.removeEventListener('contextmenu', this.handleHiddenClock);
    document.removeEventListener('click', this.handleClockAppearance);
  }

  handleHiddenClock = (e: MouseEvent) => {
    e.preventDefault();

    if (e.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  handleClockAppearance = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            name={clockName}
          />
        )}
      </div>
    );
  }
}
