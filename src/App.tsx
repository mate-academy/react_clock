import React from 'react';
import './App.scss';
import { Clock } from './Component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};
export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerContextMenu);
    document.addEventListener('click', this.handlerClick);
  }

  componentDidUpdate(_prevProps: any, prevState: State): void {
    const prevClockName = prevState.clockName;

    if (prevClockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handlerContextMenu);
    document.removeEventListener('contextmenu', this.handlerContextMenu);
    window.clearInterval(this.timerId);
  }

  handlerClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handlerContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
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
