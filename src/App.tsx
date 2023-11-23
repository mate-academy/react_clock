import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  hasClock: boolean,
  clockName: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const randomName = this.getRandomName();

      this.setState({
        clockName: randomName,
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleMenu);
    document.addEventListener('click', this.hasLeftClick);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleMenu);
    document.removeEventListener('click', this.hasLeftClick);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleMenu = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  hasLeftClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (<Clock clockName={clockName} />)}

      </div>
    );
  }
}
