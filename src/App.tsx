import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameIntervalId = 0;

  componentDidMount() {
    this.clockNameIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameIntervalId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
