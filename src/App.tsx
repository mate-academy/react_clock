import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  timerId: number | undefined;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clickHandler = () => {
    this.setState({ hasClock: true });
  }

  contextMenuHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.contextMenuHandler);

    document.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('contextmenu', this.contextMenuHandler);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          {this.state.hasClock && <Clock name={this.state.clockName} />}
        </div>
      </div>
    );
  }
}
