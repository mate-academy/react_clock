import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prevProps: never, prevState: State) {
    if (
      this.state.hasClock
      && this.state.clockName !== prevState.clockName
    ) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

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
