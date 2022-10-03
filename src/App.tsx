import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  time: Date,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date(),
  };

  clockNameInterval = 0;

  componentDidMount(): void {
    this.clockNameInterval = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerContext);
    document.addEventListener('click', this.handlerClick);
  }

  componentDidUpdate(_pp: {}, prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handlerClick);
    document.removeEventListener('contextmenu', this.handlerContext);
    window.clearInterval(this.clockNameInterval);
  }

  handlerClick = () => {
    this.setState({ hasClock: true });
  };

  handlerContext = () => {
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            hasClock={this.state.hasClock}
            clockName={this.state.clockName}
            time={this.state.time}
          />
        )}
      </div>
    );
  }
}
