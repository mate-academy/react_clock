import React from 'react';
import './App.scss';
import Clock from './Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

interface AppProps {
  getName?: () => string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameInterval: NodeJS.Timeout | null = null;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.startRenamingProcess();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    this.clearRenamingProcess();
  }

  componentDidUpdate(_: {}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
        );
      }
    }
  }

  startRenamingProcess = () => {
    if (this.nameInterval === null) {
      this.nameInterval = setInterval(() => {
        const newName = this.getName();

        this.setState({ clockName: newName });
      }, 3300);
    }
  };

  clearRenamingProcess = () => {
    if (this.nameInterval !== null) {
      clearInterval(this.nameInterval);
      this.nameInterval = null;
    }
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  getName = this.props.getName || getRandomName;

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
