import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  today: Date;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  private timerIdClockName?: number;

  private timerIdTime?: number;

  timeHandler = () => {
    const now = new Date(Date.now());

    this.setState({ today: now });

    if (this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  timerId = () => {
    this.setState({ clockName: getRandomName() });
  };

  componentDidMount(): void {
    this.timerIdClockName = window.setInterval(this.timerId, 3300);
    this.timerIdTime = window.setInterval(this.timeHandler, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdClockName);
    window.clearInterval(this.timerIdTime);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} today={this.state.today} />
        )}
      </div>
    );
  }
}
