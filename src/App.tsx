import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { AppState } from './types/types';

const getRandomName = (): string => `Clock-${Date.now().toString().slice(-4)}`;

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimerId: number = 0;

  handleClick = () => this.setState({ hasClock: true });

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
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
