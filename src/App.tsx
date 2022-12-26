import { Component } from 'react';
import { Clock } from './components/Clock/Clock';
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

  timerIdNameInterval = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    this.timerIdNameInterval = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdNameInterval);
  }

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
