import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  showClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    showClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', () => {
      this.setState({ showClock: false });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', () => {
      this.setState({ showClock: false });
    });

    window.clearInterval(this.timerId);

    document.removeEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.showClock && (
            <Clock clockName={this.state.clockName} />
          )
        }
      </div>
    );
  }
}
