import { Component } from 'react';

import './App.scss';

import { Clock } from './components/Clock';
import { Greeting } from './components/Greeting';

const names = [
  'Cute Little Ben',
  'Peppa Watch',
  'Time Observer 3000',
  'Clock For Real Adults',
  'Peppa de Tudor',
];

function getRandomName(): string {
  return names[Math.floor(Math.random() * names.length)];
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, Readonly<State>> {
  state: Readonly<State> = {
    hasClock: false,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => this.setState({ hasClock: true });

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        {hasClock
          ? (
            <Clock name={clockName} />
          ) : (
            <Greeting />
          )}
      </div>
    );
  }
}
