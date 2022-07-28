import { Component } from 'react';
import { Clock } from './component/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = this.setTimer;
    document.addEventListener('click', this.handlerClock);
    document.addEventListener('contextmenu', this.handlerClock);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    const prevName = prevState.clockName;
    const currentName = this.state.clockName;

    if (prevName !== currentName) {
      console.log(`Renamed from <${prevName}> to <${currentName}>`); // eslint-disable-line
    }
  }

  handlerClock = (event: MouseEvent) => {
    if (event.type === 'contextmenu') {
      event.preventDefault();
      this.setState({ hasClock: false });

      clearInterval(this.setTimer);
    }

    if (event.type === 'click') {
      this.setState({ hasClock: true });

      this.setTimer = window.setInterval(this.handlerSetInterval, 3300);
    }
  };

  handlerSetInterval = () => {
    this.setState({ clockName: getRandomName() });
  };

  setTimer = window.setInterval(this.handlerSetInterval, 3300);

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (<Clock clockName={clockName} />)}
      </div>
    );
  }
}
