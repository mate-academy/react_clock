import { Component, ReactNode } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  nameInterval = 0;

  componentDidMount() {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.nameInterval = window.setInterval(this.changeClockName, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.nameInterval);
  }

  changeClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  render(): ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="clock">
          {hasClock && <Clock name={clockName} />}
        </div>
      </div>
    );
  }
}

export default App;
