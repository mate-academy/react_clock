import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean
  clockName: string
  clockNameUpdaterId: number
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    hasClock: true,
    clockName: 'Clock-0',
    clockNameUpdaterId: -1,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    this.setState({
      clockNameUpdaterId: window.setInterval(() => {
        this.setState({
          clockName: getRandomName(),
        });
      }, 3300),
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.clockNameUpdaterId);
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
