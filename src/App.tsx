import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.rightButton);
    document.addEventListener('click', this.leftButton);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  rightButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={clockName} />)}
      </div>
    );
  }
}
