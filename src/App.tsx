import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface States {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, States> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameTimeIntervalId = 0;

  handleDocumentRigthClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleDocumentRigthClick);
    document.addEventListener('click', this.handleDocumentLeftClick);

    this.clockNameTimeIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleDocumentRigthClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
    window.clearInterval(this.clockNameTimeIntervalId);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
