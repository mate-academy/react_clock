import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  timerNameChange: number,
};

class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
    timerNameChange: 0,
  };

  componentDidMount() {
    this.settingTimer();

    document.addEventListener('contextmenu', () => {
      this.handleClockDisappearing();
      clearInterval(this.state.timerNameChange);
    });

    document.addEventListener('click', () => {
      this.handleClockDisappearing();
      this.settingTimer();
    });
  }

  // eslint-disable-next-line no-empty-pattern
  componentDidUpdate({}, PreviousState: State) {
    // eslint-disable-next-line no-console
    console.log(`Renamed from <${PreviousState.clockName}> to <${this.state.clockName}>`);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleClockDisappearing);

    document.removeEventListener('click', this.handleClockDisappearing);
  }

  settingTimer = () => {
    this.state.timerNameChange = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  handleClockDisappearing = () => {
    this.setState(previousState => {
      return { hasClock: !previousState.hasClock };
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="clock">
          {hasClock && <Clock clockName={clockName} />}
        </div>
      </div>
    );
  }
}

export default App;
