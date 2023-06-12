import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      if (this.state.hasClock) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const {
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
