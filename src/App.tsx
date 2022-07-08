import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  nameInterval = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);

    document.addEventListener('click', this.showClock);

    this.nameInterval = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.nameInterval);
  }

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div>
        <h1>Clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
