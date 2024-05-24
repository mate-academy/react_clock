import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type StateType = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<StateType> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<StateType>,
    prevState: Readonly<StateType>,
  ): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
