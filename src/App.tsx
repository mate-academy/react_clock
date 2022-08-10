import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  randomName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    randomName: getRandomName(),
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', this.hideClock);

    window.addEventListener('click', this.showClock);
    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    this.timerId = window.setInterval(() => {
      const prevName = this.state.randomName;

      this.setState({
        randomName: getRandomName(),
      });
      // eslint-disable-next-line
    console.log(`Renamed from ${prevName} to ${this.state.randomName}`);
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.hideClock);

    window.removeEventListener('click', this.showClock);
  }

  hideClock = () => {
    this.setState({
      hasClock: false,
    });
  };

  showClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock, randomName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock randomName={randomName} />}
      </div>
    );
  }
}
