import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  nameIntervalID: number | undefined;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.nameIntervalID = window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    if (this.nameIntervalID) {
      clearInterval(this.nameIntervalID);
    }
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  updateClockName = () => {
    const newName = this.getRandomName();

    this.setState({ clockName: newName });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
