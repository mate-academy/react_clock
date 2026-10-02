import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = 0;

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.nameTimerId);
  }

  render() {
    const { hasClock } = this.state;

    return hasClock ? <Clock name={this.state.clockName} /> : null;
  }
}
