import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newName = this.getRandomName();

      this.setState({
        clockName: newName,
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleLeftClick);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleLeftClick = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: true });
  };

  handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
