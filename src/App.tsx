import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, AppState> {
  nameTimerId?: number;

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    // start name updater
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    if (this.nameTimerId !== undefined) {
      window.clearInterval(this.nameTimerId);
      this.nameTimerId = undefined;
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  componentDidUpdate(): void {
    // rename logging is handled by the Clock component's componentDidUpdate
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
