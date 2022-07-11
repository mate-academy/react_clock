import React from 'react';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  clockName: string,
  hasClock: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    date: new Date(),
    clockName: getRandomName(),
    hasClock: true,
  };

  timerId = 0;

  clockName = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.state.hasClock = true;
    this.state.clockName = getRandomName();
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { date, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock date={date} clockName={clockName} />}
      </div>
    );
  }
}

export default App;
