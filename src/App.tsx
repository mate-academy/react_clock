import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('click',
      this.showClockHandler, false);

    document.addEventListener('contextmenu',
      this.hideClockHadler, false);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('click',
      this.showClockHandler);
    document.removeEventListener('contextmenu',
      this.hideClockHadler);
  }

  showClockHandler = (ev: Event) => {
    ev.preventDefault();
    this.setState({ hasClock: true });
  };

  hideClockHadler = (ev: Event) => {
    ev.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
