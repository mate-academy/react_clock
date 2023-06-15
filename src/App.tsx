import { Component } from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 1;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      const { hasClock } = this.state;

      event.preventDefault();
      this.setState({ hasClock: !hasClock });
    });
  }

  // componentDidUpdate(prevProps: State, prevState: State) {
  //   window.console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  // }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
