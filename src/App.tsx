import React from 'react';
import Clock from './Clock';
import './App.scss';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName() {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class App extends React.Component
  <{}, AppState> {
  nameChangeTimer: number | null = null;

  lastRenameTime: number | null = null;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.nameChangeTimer = setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300) as unknown as number;

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    if (this.nameChangeTimer !== null) {
      clearInterval(this.nameChangeTimer);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
