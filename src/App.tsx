import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  time = new Date();

  timerId = 0;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleContextMenu);
    document.addEventListener('contextmenu', this.handleMouseClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleContextMenu);
    document.removeEventListener('contextmenu', this.handleMouseClick);

    window.clearInterval(this.timerId);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prev => ({
      ...prev,
      hasClock: true,
    }));
  };

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prev => ({
      ...prev,
      hasClock: false,
    }));
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
