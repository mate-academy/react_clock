import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerID = 0;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.contextMenuHandler);
    document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }

    document.removeEventListener('contextmenu', this.contextMenuHandler);
    document.removeEventListener('click', this.clickHandler);
  }

  contextMenuHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickHandler = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {(this.state.hasClock) ? <Clock name={this.state.clockName} /> : ''}
      </div>
    );
  }
}
