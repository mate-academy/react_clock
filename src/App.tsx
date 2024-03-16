import React from 'react';
import './App.scss';
import Clock from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      if (!this.timerId) {
        this.timerId = window.setInterval(() => {
          this.setState({ clockName: getRandomName() });
        }, 3300);
      }

      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', event => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });
  }

  componentDidUpdate(prevProps: {}, prevState: State): void {
    if (prevState.clockName !== this.state.clockName) {
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
        );
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
