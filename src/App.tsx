import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends React.Component<{}, State> {
  timerId = 0;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleDocumentLeftClick);
    document.addEventListener('contextmenu', this.handleDocumentRightClick);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleDocumentLeftClick);
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
  }

  handleDocumentLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
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
