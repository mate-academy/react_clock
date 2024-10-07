import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  timerId: null | number;
  hasClock: boolean;
}
export class App extends React.Component<State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    timerId: null,
    hasClock: true,
  };

  rightClickId = document.addEventListener(
    'contextmenu',
    (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
      // put your code here
    },
  );

  leftClickId = document.addEventListener('click', () => {
    this.setState({ hasClock: true });
  });

  componentDidMount(): void {
    this.setState({
      timerId: window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300),
    });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
