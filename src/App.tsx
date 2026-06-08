import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Props {}
interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handlerRemoveClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handlerDisplayClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerRemoveClock);
    document.addEventListener('click', this.handlerDisplayClock);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handlerRemoveClock);
    document.removeEventListener('click', this.handlerDisplayClock);
    window.clearInterval(this.timerId);
  }

  // this code stops the timer

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
