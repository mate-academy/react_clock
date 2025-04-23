import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerNameId: number = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerNameId = window.setInterval(() => {
      const clockName = this.getRandomName();

      this.setState({ clockName });
    }, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerNameId);
    removeEventListener('click', this.handleClick);
    removeEventListener('contextmenu', this.handleContextMenu);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock ? <Clock name={this.state.clockName} /> : null}
      </div>
    );
  }
}
