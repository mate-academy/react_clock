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

  interval = 0;

  componentDidMount() {
    document.addEventListener('click', this.renderClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.interval = window.setInterval(this.changeClockName, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  changeClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render(): ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div>
        <h1>Clock</h1>

        <div>
          {hasClock && <Clock name={clockName} />}
        </div>
      </div>
    );
  }
}

export default App;
