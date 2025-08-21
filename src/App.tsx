import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  private nameTimerId: number = 0;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);
    return `Clock-${value}`;
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleNameChange = () => {
    const newName = this.getRandomName();
    this.setState({ clockName: newName });
  };

  componentDidMount() {
    // Додати event listener'и
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    // Почати таймер для зміни імені
    this.nameTimerId = window.setInterval(this.handleNameChange, 3300);
  }

  componentWillUnmount() {
    // Очистити таймер та event listener'и
    window.clearInterval(this.nameTimerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
