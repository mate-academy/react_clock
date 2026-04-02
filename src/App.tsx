import React from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleGlobalClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleGlobalContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  nameTimerId = 0;

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleGlobalClick);
    document.addEventListener('contextmenu', this.handleGlobalContextMenu);
  }

  componentWillUnmount() {
    clearInterval(this.nameTimerId);
    document.removeEventListener('click', this.handleGlobalClick);
    document.removeEventListener('contextmenu', this.handleGlobalContextMenu);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
