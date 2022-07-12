import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value} `;
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

  timer = setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

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
