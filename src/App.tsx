import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameInterval = 0;

  handleDocumentClick = (event: MouseEvent) => {
    event.preventDefault();
    if (event.button === 2) {
      this.setState({ hasClock: false });
    } else if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount() {
    this.clockNameInterval = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentClick);
    document.addEventListener('mousedown', this.handleDocumentClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameInterval);
    document.removeEventListener('contextmenu', this.handleDocumentClick);
    document.removeEventListener('mousedown', this.handleDocumentClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
