import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClock: boolean;
  nameOfClock: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    nameOfClock: 'Clock-0',
    isClock: true,
  };

  timerId = 0;

  handleShowClock = () => {
    this.setState({ isClock: true });
  };

  handleHideClock = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ isClock: false });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ nameOfClock: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
  }

  render() {
    const { nameOfClock, isClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClock && <Clock nameOfClock={nameOfClock} />}
      </div>
    );
  }
}
