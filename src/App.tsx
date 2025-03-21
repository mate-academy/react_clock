import React from 'react';
import './App.scss';
import { Clock } from './conponents/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  leftClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: true })
  };

  rightClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false });
  };

  componentDidMount = (): void => {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);

    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };
  
  componentWillUnmount() {
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);
  }
  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
};
