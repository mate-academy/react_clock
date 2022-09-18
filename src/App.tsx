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

  componentDidMount() {
    this.setTimerForName();

    document.addEventListener('contextmenu', (event) => {
      this.setState({ hasClock: false });
      event.preventDefault();
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  setTimerForName = () => {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

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
