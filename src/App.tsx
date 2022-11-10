import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  today = new Date();

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock, true);
    document.addEventListener('click', this.showClock, true);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock, true);
    document.removeEventListener('click', this.showClock, true);
    window.clearInterval(this.timerId);
  }

  hideClock = (e: Event) => {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      hasClock: false,
    });
  };

  showClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            hasClock={this.state.hasClock}
            clockName={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
