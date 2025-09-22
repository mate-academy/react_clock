import React from 'react';
import './App.scss';
import { Clock } from './components';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Props {};

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.PureComponent<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleShowClock = () => {
    this.setState({ hasClock: true });
  }

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('click', this.handleShowClock);
    window.removeEventListener('contextmenu', this.handleHideClock);
  }

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
