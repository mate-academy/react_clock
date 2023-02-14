import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  showClock: boolean
  clockName: string
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    showClock: true,
    clockName: 'Clock-0',
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ showClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  componentDidUpdate(prevProps:State) {
    console.debug(
      `Renamed from ${prevProps.clockName} to ${this.state.clockName}`,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { showClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {showClock && <Clock name={clockName} />}
      </div>
    );
  }
}
