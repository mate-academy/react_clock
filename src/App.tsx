import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

const getRandomName = (): string => {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
};

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.handleHideClock);
    window.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    window.clearTimeout(this.timerId);
    window.removeEventListener('contextmenu', this.handleHideClock);
    window.removeEventListener('click', this.handleShowClock);
  }

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
