import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId1 = 0;

  timerId2 = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidUpdate(prevProps: Readonly<State>,
    prevState: Readonly<{}>): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`
      );
    }
  }

  handleRightClick = () => {
    this.setState(() => {
      return {
        hasClock: false,
      };
    });
  };

  handleLeftClick = () => {
    this.setState(() => {
      return {
        hasClock: true,
      };
    });
  };

  componentDidMount(): void {
    document.addEventListener('click', () => {
      this.handleLeftClick();
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.handleRightClick();
    });

    this.timerId1 = window.setInterval(() => {
      this.setState(() => {
        return {
          clockName: this.getRandomName(),
        };
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    window.clearInterval(this.timerId1);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
};
