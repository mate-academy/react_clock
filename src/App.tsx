import React from 'react';
import './App.scss';
import { Clock } from './components/timer';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  private timerId: number | null = null;

  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
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
