import { PureComponent } from 'react';
import './App.scss';
import { Clock, Props } from './component/clock';

export class App extends PureComponent {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleClockName: undefined | number;

  componentDidMount(): void {
    window.addEventListener('contextmenu', this.handleContextMenu);
    window.addEventListener('click', this.handleClick);

    this.handleClockName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: Props, prevState: Props): void {
    if (this.state.hasClock) {
      if (prevState.clockName !== this.state.clockName) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
        );
      }
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.handleClockName);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 0) {
      this.setState({ hasClock: true });
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

        {this.state.hasClock && <Clock {...this.state} />}
      </div>
    );
  }
}
