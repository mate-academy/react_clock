import { PureComponent } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends PureComponent {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  handleClockName = window.setInterval(() => {
    const oldName = this.state.clockName;

    this.state.clockName = this.getRandomName();
    // eslint-disable-next-line no-console
    console.info(`Renamed from ${oldName} to ${this.state.clockName}`);
  }, 3300);

  componentDidMount(): void {
    this.handleClick();
    // this.handleClock;
    window.addEventListener('contextmenu', this.handleContextMenu);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.handleClockName);
    window.clearInterval(this.handleClock);
  }

  handleClock = window.setInterval(() => {
    this.setState(curState => ({
      ...curState,
      today: new Date(),
    }));

    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }, 1000);

  handleContextMenu = (_event: MouseEvent) => {
    _event.preventDefault();
    this.setState((curState) => {
      return {
        ...curState,
        hasClock: false,
      };
    });
  };

  handleClick = (event?: MouseEvent) => {
    event?.preventDefault();

    if (event?.button === 0) {
      this.setState((curState) => {
        return {
          ...curState,
          hasClock: true,
        };
      });
    }
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.hasClock && <Clock {...this.state} />}
      </div>
    );
  }
}
