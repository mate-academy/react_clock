import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  interval: number | undefined;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.RightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.interval = window.setInterval(this.getRandomName, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.RightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.interval);
  }

  handleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  RightClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    this.setState({ clockName: `Clock-${value}` });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
        && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
