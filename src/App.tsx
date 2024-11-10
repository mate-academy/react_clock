import { Component } from 'react';
import Clock, { getRandomName } from './Clock';
import './App.scss';

interface AppState {
  clockName: string;
  hasClock: boolean;
}

class App extends Component<{}, AppState> {
  nameTimerId: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      clockName: 'Clock-0',
      hasClock: true,
    };
  }

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      const oldClockName = this.state.clockName;
      const newClockName = getRandomName();

      console.warn(
        `Renamed from ${oldClockName} to ${newClockName}`,
      );
      this.setState({ clockName: newClockName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
