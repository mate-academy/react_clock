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
    const randomNumber = Math.floor(Math.random() * 10000);

    return `Clock-${randomNumber}`;
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
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
