import { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  hendleHideClock = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({
      hasClock: event.button === 0,
    });
  };

  hendleShowClock = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({
      hasClock: event.button !== 1,
    });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hendleHideClock);
    document.addEventListener('click', this.hendleShowClock);
  }

  shouldComponentUpdate(
    _nexProps: Readonly<State>,
    nextState: Readonly<State>,
  ): boolean {
    return this.state.hasClock || nextState.hasClock;
  }

  componentDidUpdate(
    _prevState: Readonly<State>,
    nexState: Readonly<State>,
  ): void {
    if (nexState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${nexState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
