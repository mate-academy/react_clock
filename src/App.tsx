import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleRightClick);
    document.addEventListener('contextmenu', this.handleLeftClick);
  }

  componentDidUpdate(_: {}, prevState: State) {
    const { clockName, hasClock } = this.state;

    if (clockName !== prevState.clockName && hasClock) {
      window.console.debug(
        `Renamed from ${prevState.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleRightClick = () => {
    this.setState({ hasClock: true });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
