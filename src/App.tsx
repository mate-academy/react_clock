import { Component } from 'react';
import Clock, { getRandomName } from './Clock';
import './App.scss';

interface AppState {
  clockName: string;
  hasClock: boolean;
}

class App extends Component<{}, AppState> {
  nameTimerId: number | undefined;

  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.startNameUpdateTimer();

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    this.clearNameUpdateTimer();

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  startNameUpdateTimer = () => {
    this.nameTimerId = window.setInterval(this.updateClockName, 3300);
  };

  clearNameUpdateTimer = () => {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }
  };

  updateClockName = () => {
    const newClockName = getRandomName();
    if (newClockName !== this.state.clockName) {
      this.setState({ clockName: newClockName });
    }
  };

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
