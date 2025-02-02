import React from 'react';
import './App.scss';
import { Clock } from './Clock';

const names = ['Clock-4900', 'Clock-8200', 'Clock-1500'];
let nameIndex = 0;

function getRandomName(): string {
  const name = names[nameIndex];

  nameIndex = (nameIndex + 1) % names.length;

  return name;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  private nameTimerId: number | null = null;

  private clickHandler: (() => void) | null = null;

  private contextMenuHandler: ((e: MouseEvent) => void) | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    this.clickHandler = () => {
      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    };

    document.addEventListener('click', this.clickHandler);

    this.contextMenuHandler = (e: MouseEvent) => {
      e.preventDefault();
      if (this.state.hasClock) {
        this.setState({ hasClock: false });
      }
    };

    document.addEventListener('contextmenu', this.contextMenuHandler);

    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(prevProps: {}, prevState: AppState): void {
    if (prevState.clockName !== this.state.clockName && prevState.hasClock) {
      // prettier-ignore
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.contextMenuHandler) {
      document.removeEventListener('contextmenu', this.contextMenuHandler);
    }

    if (this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
    }

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          {this.state.hasClock ? <Clock name={this.state.clockName} /> : null}
        </div>
      </div>
    );
  }
}
