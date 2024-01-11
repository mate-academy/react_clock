/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.scss';
import { Clock } from './Clock/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  // eslint-disable-next-line react/sort-comp
  handlRigthClic = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlLeftClic = (): void => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handlRigthClic);
    document.addEventListener('click', this.handlLeftClic);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (<Clock name={this.state.clockName} />)}
      </div>
    );
  }
}
