import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean,
  clockName: string,
  previousClockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    previousClockName: '',
  };

  timerForClock = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerForClock = window.setInterval(() => {
      this.setState(prevState => ({
        clockName: getRandomName(),
        previousClockName: prevState.clockName,
      }));
    }, 3300);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const {
      hasClock,
      clockName,
      previousClockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock
            clockName={clockName}
            previousClockName={previousClockName}
          />
        )}
      </div>
    );
  }
}
