import { PureComponent } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends PureComponent<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdName = 0;

  value = Date.now().toString().slice(-4);

  componentDidMount() {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName
      && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdName);
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  getRandomName() {
    this.value = Date.now().toString().slice(-4);

    return `Clock-${this.value}`;
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
