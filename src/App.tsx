import './App.scss';
import { Component } from 'react';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  intervalName = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', () => {
      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    this.intervalName = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    if (!this.state.hasClock) {
      window.clearInterval(this.intervalName);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
