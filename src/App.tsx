import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  rightClickHandler = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClickHandler = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.leftClickHandler);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.rightClickHandler);
    document.removeEventListener('click', this.leftClickHandler);
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
