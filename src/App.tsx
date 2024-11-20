import * as React from 'react';
import { Clock } from './Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerName = 0;

  hideClock = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (): void => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      this.hideClock(event);
    });

    document.addEventListener('click', () => {
      this.showClock();
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    window.clearInterval(this.timerName);
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
