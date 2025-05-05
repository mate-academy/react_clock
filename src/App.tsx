import React, { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

interface ClockState {
  time: string;
}

class Clock extends Component<ClockProps, ClockState> {
  private timerID: NodeJS.Timeout | null = null;

  // State initialization as a class property
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount(): void {
    this.timerID = setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({
        time: currentTime,
      });

      // eslint-disable-next-line no-console
      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  private nameTimerID: NodeJS.Timeout | null = null;

  private clickHandler: () => void;

  // Using the global MouseEvent type for DOM event handlers
  private contextMenuHandler: (event: globalThis.MouseEvent) => void;

  // State initialization as a class property
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  constructor(props: {}) {
    super(props);

    this.clickHandler = () => {
      this.setState({ hasClock: true });
    };

    this.contextMenuHandler = (event: globalThis.MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    };
  }

  componentDidMount(): void {
    // Update clock name every 3300ms
    this.nameTimerID = setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    // Show Clock on left click
    document.addEventListener('click', this.clickHandler);

    // Hide Clock on right click
    document.addEventListener('contextmenu', this.contextMenuHandler);
  }

  componentWillUnmount(): void {
    if (this.nameTimerID !== null) {
      clearInterval(this.nameTimerID);
    }

    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('contextmenu', this.contextMenuHandler);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
