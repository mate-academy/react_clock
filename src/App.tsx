import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  timerIdClockName?: number;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    window.clearInterval(this.timerIdClockName);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
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
