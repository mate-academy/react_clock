import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state: { hasClock: boolean, clockName: string } = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  interval: number | undefined;

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
    this.interval = window.setInterval(this.getRandomName, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    clearInterval(this.interval);
  }

  handleLeftClick = (): void => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  getRandomName = (): void => {
    const value = Date.now().toString().slice(-4);

    this.setState({ clockName: `Clock-${value}` });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">React clock</h1>
        {
          this.state.hasClock && <Clock name={clockName} />
        }
      </div>
    );
  }
}
