/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  return `Clock-${Math.floor(Math.random() * 100)}`;
}

export class App extends Component<{}, AppState> {
  intervalID: number | undefined;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.intervalID = window.setInterval(() => {
      const newName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Generated new clock name: ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div
          onClick={this.handleClick}
          onContextMenu={this.handleContextMenu}
          className="Clock"
        >
          {hasClock && <Clock name={clockName} />}
        </div>
      </div>
    );
  }
}
