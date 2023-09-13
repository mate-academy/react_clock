import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleDocumentRightClick);
    document.addEventListener('click', this.handleDocumentLeftClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleDocumentRightClick);
    document.removeEventListener('click', this.handleDocumentLeftClick);
    window.clearInterval(this.timerId);
  }

  handleDocumentRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleDocumentLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { clockName, hasClock } = this.state;

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
