import React from 'react';
import './App.scss';
import { Clock } from './Clock';

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

  intervalId = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    window.clearInterval(this.intervalId);
  };

  handleLeftClick = (event: MouseEvent) => {
    if (event.button === 0) {
      // Sprawdzamy czy kliknięto lewy przycisk myszy
      this.setState({ hasClock: true });
      this.intervalId = window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    }
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.intervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.intervalId);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    const content = (
      <div className="Clock">
        <Clock name={this.state.clockName} />
      </div>
    );

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock ? content : null}
      </div>
    );
  }
}
