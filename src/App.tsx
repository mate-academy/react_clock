import { Component } from 'react';

import './App.scss';

import { Clock } from './components/Clock';

const names = [
  'Cute Little Ben',
  'Peppa Watch',
  'Time Observer 3000',
  'Clock For Real Adults',
  'Peppa de Tudor',
];

function getNewRandomName(currentName: string): string {
  const getRandomName = () => names[Math.floor(Math.random() * names.length)];

  let newName = getRandomName();

  while (newName === currentName) {
    newName = getRandomName();
  }

  return newName;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, Readonly<State>> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Peppa Watch',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState(state => ({
        clockName: getNewRandomName(state.clockName),
      }));
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
          && (
            <Clock name={clockName} />
          )}
      </div>
    );
  }
}
