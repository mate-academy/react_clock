import { Component } from 'react';
import Clock from './Clock';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export default class App extends Component {
  state:State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  randomClockNameTimer = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.rightMouseClickHandler);
    document.addEventListener('click', this.leftMouseClickHandler);

    this.randomClockNameTimer = window.setInterval(() => {
      const newRandomClockName = getRandomName();

      this.setState({ clockName: newRandomClockName });
    }, 3300);
  }

  rightMouseClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  leftMouseClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
