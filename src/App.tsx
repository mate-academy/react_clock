import React from 'react';
import './App.scss';
import { Clock } from './components';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number = 0;

  componentDidMount = () => {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    // remover event listeners
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleClick = () => {
    // mostrar o clock
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  // this code stops the timer
  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
