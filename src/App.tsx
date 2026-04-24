import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  updateClockName = () => {
    const oldName = this.state.clockName;
    const newName = getRandomName();

    // eslint-disable-next-line no-console
    console.warn(`Renamed from ${oldName} to ${newName}`);
    this.setState({ clockName: newName });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    return (
      this.state.hasClock && (
        <Clock
          name={this.state.clockName}
          updateClockName={this.updateClockName}
        />
      )
    );
  }
}
