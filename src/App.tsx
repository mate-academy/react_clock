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

let timerMenu: () => void;
let timerClick: () => void;

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    timerIdName: 0,
    timerIdToday: 0,
    hasClock: true,
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
    timerMenu = document.addEventListener(
      'contextmenu',
      (event: MouseEvent) => {
        event.preventDefault(); // not to show the context menu
        this.setState({ hasClock: false });
      },
    );
    timerClick = document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerIdName);
    document.removeEventListener('contextmenu', timerMenu);
    document.removeEventListener('click', timerClick);
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
