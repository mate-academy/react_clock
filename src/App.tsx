import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App2: React.FC = () => {
  const today = new Date();
  let clockName = 'Clock-0';

  // This code starts a timer
  const timerId = window.setInterval(() => {
    clockName = getRandomName();
  }, 3300);

  // this code stops the timer
  window.clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    </div>
  );
};

type State = {
  isShown: boolean,
  clockName: string,
};

export class App extends React.Component {
  state: State = {
    isShown: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    window.clearInterval(this.clockNameTimerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isShown: false });
  };

  showClock = () => {
    this.setState({ isShown: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isShown && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
