import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: string,
  hasClock: boolean,
  timerId: number | null;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: null,
  };

  componentDidMount() {
    const NewTimerId = window.setInterval(() => {
      const newClockName = this.getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);
      this.setState({
        clockName: newClockName,
      });
    }, 3300);

    this.setState({
      timerId: NewTimerId,
    });

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    if (this.state.timerId !== null) {
      clearInterval(this.state.timerId);
    }

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  getRandomName(): string {
    // eslint-disable-next-line no-console
    console.log(this);
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  showClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
