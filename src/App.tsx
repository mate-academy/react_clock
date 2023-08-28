import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: string,
  hasClock: boolean,
  timerId: number;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: 0,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    const NewTimerId = window.setInterval(() => {
      const newClockName = this.getRandomName();

      this.setState({
        clockName: newClockName,
      });
    }, 3300);

    this.setState({
      timerId: NewTimerId,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    window.clearInterval(this.state.timerId);
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
