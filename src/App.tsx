import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.removeClock);

    document.addEventListener('click', this.addClock);

    this.nameId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.removeClock);
    document.removeEventListener('click', this.addClock);
  }

  removeClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  addClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return this.state.hasClock && (
      <div className="App">
        <Clock name={this.state.clockName} />
      </div>
    );
  }
}
