import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockTimerId = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState(({ hasClock }) => ({ hasClock: !hasClock }));
  };

  addListeners = () => {
    const { handleRightClick } = this;

    document.removeEventListener('click', handleRightClick);
    document.addEventListener('contextmenu', handleRightClick);
  };

  removeListeners = () => {
    const { handleRightClick } = this;

    document.removeEventListener('contextmenu', handleRightClick);
    document.addEventListener('click', handleRightClick);
  };

  componentDidMount(): void {
    this.addListeners();

    this.clockTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.hasClock !== this.state.hasClock) {
      if (this.state.hasClock) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    }

    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    this.removeListeners();
    window.clearInterval(this.clockTimerId);
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
