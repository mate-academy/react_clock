import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: string;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false });
    // put your code here
  };

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: true });
    // put your code here
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentLeftClick);
    document.addEventListener('click', this.handleDocumentRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleDocumentLeftClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
