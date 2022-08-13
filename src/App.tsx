import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    setInterval(() => {
      const randomName = Math.random().toString().slice(2, 6);

      this.setState({ clockName: `Clock - ${randomName}` });
    }, 3300);

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
  }

  componentDidUpdate() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          {hasClock && <Clock clockName={clockName} />}
        </div>
      </div>
    );
  }
}
