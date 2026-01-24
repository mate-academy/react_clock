import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleContextMenu = () => {
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleClockNameChange = (name: string) => {
    this.setState({ clockName: name });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            onClockNameChange={this.handleClockNameChange}
            clockName={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
