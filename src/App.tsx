import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  timerId = 0;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3000);
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    const { clockName: oldName } = prevState;
    const { clockName: newName } = this.state;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  shouldComponentUpdate(
    _nextProps: Readonly<{}>,
    nextState: Readonly<State>,
  ): boolean {
    return this.state.hasClock || nextState.hasClock;
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
