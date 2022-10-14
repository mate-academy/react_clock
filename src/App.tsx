import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  updateClockNameId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.leftClickHandler, true);
    document.addEventListener('contextmenu', this.rightClickHandler, true);
    this.updateClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.updateClockNameId);
    document.removeEventListener('click', this.leftClickHandler, true);
    document.removeEventListener('contextmenu', this.rightClickHandler, true);
  }

  leftClickHandler = () => {
    this.setState({ hasClock: true });
  };

  rightClickHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
