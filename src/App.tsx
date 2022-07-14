import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 5);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    clockName: getRandomName(),
    hasClock: true,
  };

  timerId = setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          {hasClock
            ? (
              <>
                <strong>{clockName}</strong>
                <Clock clockName={clockName} />
              </>
            )
            : ''}
        </div>
      </div>
    );
  }
}

export default App;
