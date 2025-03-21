import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerID: number | null = null;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  updateClockNameHandler = () => {
    this.setState({ clockName: getRandomName() });
  };

  componentDidMount(): void {
    this.nameTimerID = window.setInterval(this.updateClockNameHandler, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    if (this.nameTimerID) {
      window.clearInterval(this.nameTimerID);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
