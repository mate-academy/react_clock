import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      document.addEventListener('click', this.handleClick);
      document.addEventListener('contextmenu', this.handleContextMenuClick);
    }, 3300);
  }

  componentDidUpdate(_:{}, prevState: State): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      console.info(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenuClick);
  }

  handleClick = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  handleContextMenuClick = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
