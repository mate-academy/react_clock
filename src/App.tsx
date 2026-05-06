import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasTask: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasTask: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleClick = () => {
    this.setState({ hasTask: true });
  };

  handleContextMenu = () => {
    this.setState({ hasTask: false });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <h1>React clock</h1>
        {this.state.hasTask === true ? (
          <Clock clockName={this.state.clockName} />
        ) : null}
      </div>
    );
  }
}
