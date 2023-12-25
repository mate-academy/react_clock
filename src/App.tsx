import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState((currentState) => ({
        ...currentState,
        clockName: getRandomName(),
      }));
    }, 3300);
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
  }

  handleDocumentRightClick = (event: DocumentEventMap['contextmenu']) => {
    event.preventDefault();

    this.setState((currentState) => ({
      ...currentState,
      hasClock: false,
    }));
  };

  handleDocumentLeftClick = (event: DocumentEventMap['click']) => {
    event.preventDefault();

    this.setState((currentState) => ({
      ...currentState,
      hasClock: true,
    }));
  };

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
