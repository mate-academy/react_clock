import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
  wasClockHidden: boolean;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    wasClockHidden: false,
  };

  componentDidMount(): void {
    const timerId = setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.componentWillUnmount = () => {
      clearInterval(timerId);
      document.removeEventListener('contextmenu', this.handleContextMenu);
      document.removeEventListener('click', this.handleClick);
    };
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.wasClockHidden && this.state.hasClock) {
      this.setState({ wasClockHidden: false });
    }

    if (
      !this.state.wasClockHidden &&
      prevState.clockName !== this.state.clockName
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false, wasClockHidden: true });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName() {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

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
