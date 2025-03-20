import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}
export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdName = 0;

  handleRightClickEvent = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  handleLeftClickEvent = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClickEvent);

    document.addEventListener('click', this.handleLeftClickEvent);

    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdName);
    document.removeEventListener('contextmenu', this.handleRightClickEvent);
    document.removeEventListener('click', this.handleLeftClickEvent);
  }

  render(): React.ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
