import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type TState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, TState> {
  timerNameId = 0;

  state: TState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerNameId = window.setInterval(this.tickName, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerNameId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleLeftClick);
  }

  tickName = () => {
    this.setState({
      clockName: this.getRandomName(),
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
