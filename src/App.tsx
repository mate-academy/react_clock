import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockName: getRandomName(),
    hasClock: true,
  };

  setRandomName = setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);

    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    clearInterval(this.setRandomName);
  }

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        {hasClock
        && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
