import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
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

    window.setInterval(() => {
      const newName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newName}`);
      // this.state.clockName = newName;
      this.setState({
        clockName: newName,
      });
    }, 3300);
  }

  render() {
    let content;

    if (this.state.hasClock) {
      content = (
        <Clock clockName={this.state.clockName} />
      );
    }

    return (
      <div className="App">
        <h1>React clock</h1>
        {content}
      </div>
    );
  }
}
