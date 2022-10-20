import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameIntervalId = 0;

  componentDidMount() {
    this.nameIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    const { hasClock, clockName } = this.state;

    if ((prevState.clockName !== clockName) && hasClock) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    window.clearInterval(this.nameIntervalId);
  }

  handleLeftClick = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: true });
  };

  handleRightClick = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
