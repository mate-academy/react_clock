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

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  toggleClockVisibility = (visibility: boolean, event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: visibility });
  };

  handleContextMenu = (event: MouseEvent) =>
    this.toggleClockVisibility(false, event);

  handleClick = (event: MouseEvent) => this.toggleClockVisibility(true, event);

  changeClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
    this.timerId = window.setInterval(this.changeClockName, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
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
