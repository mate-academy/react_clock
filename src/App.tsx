import { Component } from 'react';
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

export class App extends Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  // today = new Date();
  timerId = 0;

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleOpenClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleOpenClock);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>): void {
    const { clockName, hasClock } = this.state;

    if (prevState.clockName !== clockName && hasClock) {
      window.console.warn(
        `Renamed from ${prevState.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.handleHideClock);
    window.removeEventListener('click', this.handleOpenClock);
  }

  // This code starts a timer
  // const timerId = window.setInterval(() => {
  //   this.clockName = getRandomName();
  // }, 3300);

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
