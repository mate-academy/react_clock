import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | null = null;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleClockVisibleFalse);
    document.addEventListener('click', this.handleClockVisibleTrue);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClockVisibleFalse);
    document.removeEventListener('click', this.handleClockVisibleTrue);

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  handleClockVisibleFalse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClockVisibleTrue = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
