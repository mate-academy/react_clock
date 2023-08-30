import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });
  }

  componentDidUpdate(): void {
    if (!this.state.hasClock) {
      document.addEventListener('click', () => {
        this.setState({ hasClock: true });
      });
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
