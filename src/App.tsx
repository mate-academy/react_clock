import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

const getRandomName = (): string => `Clock-${Math.floor(Math.random() * 100)}`;

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  nameTimerId: number | undefined;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    // Add event listeners for toggling the clock visibility
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    // Start updating the clock name every 3300ms
    this.nameTimerId = window.setInterval(() => {
      this.setState(prevState => {
        const newName = getRandomName();
        //eslint-disable-next-line no-console

        console.warn(`Renamed from ${prevState.clockName} to ${newName}`); // eslint-disable-next-line no-console

        return { clockName: newName };
      });
    }, 3300);
  }

  componentWillUnmount() {
    // Remove event listeners and clear the timer
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);

    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault(); // Prevent the default context menu
    this.setState({ hasClock: false }); // Hide the clock on right-click
  };

  handleClick = () => {
    this.setState({ hasClock: true }); // Show the clock on left-click
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
