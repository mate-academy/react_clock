import React, { Component } from 'react';
import './App.scss';
import { Clock, getRandomName } from './Clock/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  private timeId?: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleClick = (): void => {
    this.setState({
      hasClock: true,
    });
  };

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.timeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    if (this.timeId) {
      clearInterval(this.timeId);
    }
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
