import React, { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

interface AppState {
  hasClock: boolean;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
  };

  handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div
        className="App"
        role="presentation"
        onContextMenu={this.handleContextMenu}
        onClick={this.handleClick}
      >
        <h1>React clock</h1>
        {this.state.hasClock && <Clock onUpdateTime={() => {}} />}
      </div>
    );
  }
}
