import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerIdEveryThree = 0;

  componentDidMount() {
    this.timerIdEveryThree = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerHideClock);
    document.addEventListener('click', this.handlerShowClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdEveryThree);

    document.removeEventListener('contextmenu', this.handlerHideClock);
    document.removeEventListener('click', this.handlerShowClock);
  }

  handlerHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlerShowClock = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <Clock name={clockName} />
          </div>
        )}
      </div>
    );
  }
}
