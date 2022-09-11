import { Component } from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.hideClock);
  }

  componentDidUpdate() {
    if (!this.state.hasClock) {
      document.removeEventListener('contextmenu', this.hideClock);
      document.addEventListener('contextmenu', this.contextClick);

      document.addEventListener('click', this.appearClock);
    } else {
      document.removeEventListener('click', this.appearClock);
      document.removeEventListener('contextmenu', this.contextClick);

      document.addEventListener('contextmenu', this.hideClock);
    }
  }

  contextClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  hideClock = (e: { preventDefault: () => void; }) => {
    this.setState({ hasClock: false });
    e.preventDefault();
  };

  appearClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
          && <Clock clockName={clockName} />}
      </div>
    );
  }

  // const today = new Date();
  // let clockName = 'Clock-0';

  // // This code starts a timer
  // const timerId = window.setInterval(() => {
  //   clockName = getRandomName();
  // }, 3300);

  // // this code stops the timer
  // window.clearInterval(timerId);
}
