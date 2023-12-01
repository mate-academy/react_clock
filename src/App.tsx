import { Component } from 'react'; // react component
import './App.scss'; // styles
import { AppState } from './types'; // types
import { Clock } from './Clock'; // clock component

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    intervalId: undefined,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });

    const tempIntervalId = window.setInterval(() => {
      const newName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);

    this.setState({ intervalId: tempIntervalId });
  }

  render() {
    const { hasClock, clockName, intervalId } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          hasClock
            ? <Clock name={clockName} intervalId={intervalId} />
            : null
        }
      </div>
    );
  }
}
