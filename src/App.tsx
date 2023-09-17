import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameUpdateInterval: number | undefined;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.nameUpdateInterval = window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);

    if (this.nameUpdateInterval !== undefined) {
      window.clearInterval(this.nameUpdateInterval);
    }
  }

  static getRandomName() {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  updateClockName = () => {
    this.setState({
      clockName: App.getRandomName(),
    });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
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
