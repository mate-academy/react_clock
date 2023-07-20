/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerNameId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightMouseClick);
    document.addEventListener('click', this.handleLeftMouseClick);

    this.timerNameId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightMouseClick);
    document.removeEventListener('click', this.handleLeftMouseClick);
  }

  handleRightMouseClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: false });
  };

  handleLeftMouseClick = () => {
    if (this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
