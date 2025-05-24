import React from 'react';
import './App.scss';
import { Clock } from './Clock';

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

  timerId?: number;

  contextMenuHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  clickHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.contextMenuHandler);
    document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.contextMenuHandler);
    document.removeEventListener('click', this.clickHandler);
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line no-console
    console.warn(`Renamed from Clock-0 to ${this.state.clockName}`);
  }


  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          {this.state.hasClock && (
            <>
              <strong className="Clock__name">{this.state.clockName}</strong>

              {' time is '}

              <Clock />
            </>
          )}
        </div>
      </div>
    );
  }
}
