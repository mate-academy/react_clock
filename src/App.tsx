import { Component } from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  nameId = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    this.nameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.nameId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="clock">React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
