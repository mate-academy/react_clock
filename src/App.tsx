import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  nameTimer = 0;

  componentDidMount() {
    this.nameTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });

      this.nameTimer = window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    });

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
      clearInterval(this.nameTimer);
    });
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
