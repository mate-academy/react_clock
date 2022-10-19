import { Component } from 'react';
import { Clock } from './Clock';

interface State {
  clockName: string,
  hasClock: boolean,
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = Number();

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentDidUpdate(_: never, prevState: State) {
    const { clockName, hasClock } = this.state;
    const { clockName: prevClockName } = prevState;

    if (clockName !== prevClockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    window.clearInterval(this.timerId);
  }

  hideClock = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          && <Clock clockName={clockName} hasClock={hasClock} />}
      </div>
    );
  }
}
