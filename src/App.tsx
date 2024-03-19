import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleDocumentRightClick = () => {
    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newName = this.getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
