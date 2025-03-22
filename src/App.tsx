import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  doEventContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  doEventClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    window.clearInterval(this.timerId);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.doEventContextmenu);
    document.addEventListener('click', this.doEventClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.doEventClick);
    document.removeEventListener('contextmenu', this.doEventContextmenu);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
