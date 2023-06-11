import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean,
  clockName: string,
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    window.setInterval(() => this.setState(
      { clockName: getRandomName() },
    ), 3300);
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
        </div>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </>
    );
  }
}
