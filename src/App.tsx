import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private timerId?: number;

  private showClock = () => {
    this.setState({ hasClock: true });
  };

  private hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  componentDidMount() {
    document.addEventListener('click', this.showClock);

    document.addEventListener('contextmenu', this.hideClock);

    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({
        clockName: newName,
      });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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
