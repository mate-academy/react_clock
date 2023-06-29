import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('click', this.rightClick);

    window.clearInterval(this.timerId);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  rightClick = ((e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  });

  getRandomNAme = () => {
    const valueName = Date.now().toString().slice(-4);

    return `Clock-${valueName}`;
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
