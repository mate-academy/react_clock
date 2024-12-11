import React from 'react';
import './App.scss';
import { getRandomName } from './getRandomName';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({
        hasClock: false,
      });
    });
    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });
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
