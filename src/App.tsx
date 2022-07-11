import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

class App extends Component<{}, State> {
  state = {
    clockName: getRandomName(),
    hasClock: true,
  };

  timerName = setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    return this.timerName;
  }

  componentWillUnmount() {
    clearInterval(this.timerName);
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

export default App;
