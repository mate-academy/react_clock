import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  today: Date;
  clockName: string;
  timerIdName: number;
  timerIdToday: number;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    timerIdName: 0,
    timerIdToday: 0,
    hasClock: true,
  };

  timerMenu = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false });
  };

  timerClick = () => {
    this.setState({ hasClock: true });
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  // This code starts a timer
  componentDidMount(): void {
    this.setState({
      timerIdName: window.setInterval(() => {
        this.setState({ clockName: this.getRandomName() });
      }, 3300),
    });

    document.addEventListener('contextmenu', this.timerMenu);

    document.addEventListener('click', this.timerClick);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerIdName);
    document.removeEventListener('contextmenu', this.timerMenu);
    document.removeEventListener('click', this.timerClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
