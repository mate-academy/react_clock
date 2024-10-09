import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | undefined;

  cleanerListener: () => void = () => {};

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    };

    const handleClick = () => {
      this.setState({ hasClock: true });
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    this.cleanerListener = () => {
      removeEventListener('contextmenu', handleContextMenu);
      removeEventListener('click', handleClick);
    };
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    this.cleanerListener();
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
